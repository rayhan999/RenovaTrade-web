import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "@/components/ui/BackToTop"
import { LanguageProvider } from "@/components/i18n/LanguageProvider"

export default function AppShell({ children }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 focus-visible:outline-none">
          {children}
        </main>
        <Footer />
      </div>
      <BackToTop />
    </LanguageProvider>
  )
}
