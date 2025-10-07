import fs from 'fs'
import path from 'path'

const APP_DIR = path.join(process.cwd(), 'app')

function isPageFile(filename) {
  return /page\.(js|jsx|ts|tsx)$/.test(filename)
}

async function collectRoutes(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true })
  const routes = []

  // if this directory contains a page.* file, consider it a route
  const hasPage = entries.some(e => e.isFile() && isPageFile(e.name))
  if (hasPage) {
    const rel = path.relative(APP_DIR, dir)
    // skip api routes and dynamic routes (contain [ )
    if (rel && rel.split(path.sep).some(p => p.includes('[') || p === 'api')) {
      // skip
    } else {
      const routePath = rel === '' ? '/' : `/${rel.split(path.sep).join('/')}`
      routes.push(routePath)
    }
  }

  // Recurse into subdirectories
  for (const entry of entries) {
    if (entry.isDirectory()) {
      // skip api folder
      if (entry.name === 'api') continue
      const subdir = path.join(dir, entry.name)
      const subroutes = await collectRoutes(subdir)
      routes.push(...subroutes)
    }
  }

  return routes
}

export async function GET() {
  try {
    const siteUrl = process.env.SITE_URL || 'https://renovatrade.fi'
    const routes = await collectRoutes(APP_DIR)

    // ensure root exists
    if (!routes.includes('/')) routes.unshift('/')

    const urls = routes
      .filter((v, i) => routes.indexOf(v) === i) // unique
      .map(route => {
        // basic priority: home 1.0, top-level 0.8, deeper 0.6
        const depth = route === '/' ? 0 : route.split('/').length - 1
        const priority = route === '/' ? '1.0' : depth === 1 ? '0.8' : '0.6'
        const changefreq = depth === 0 ? 'weekly' : 'monthly'
        const loc = `${siteUrl.replace(/\/$/, '')}${route}`
        return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
      })

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`

    return new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (err) {
    console.error('Error generating sitemap', err)
    return new Response('Error generating sitemap', { status: 500 })
  }
}
