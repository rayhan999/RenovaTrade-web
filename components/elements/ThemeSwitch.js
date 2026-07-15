import { useEffect, useState } from "react"

export default function ThemeSwitch() {
    const [togglETHeme, setTogglETHeme] = useState("light-theme")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("togglETHeme")) || "light-theme"
        setTogglETHeme(stored)
        setMounted(true)
    }, [])

    useEffect(() => {
        localStorage.setItem("togglETHeme", JSON.stringify(togglETHeme))
        document.body.classList.add(togglETHeme)
        return () => {
            document.body.classList.remove(togglETHeme)
        }
    }, [togglETHeme])

    if (!mounted) return null

    return (
        <>
            <nav className="switcher__tab"
                onClick={() => togglETHeme === "light-theme" ? setTogglETHeme("dark-theme") : setTogglETHeme("light-theme")
                }
            >
                <span className="switcher__btn light-mode"><i className="flaticon-sun" /></span>
                <span className="switcher__mode" />
                <span className="switcher__btn dark-mode"><i className="flaticon-moon" /></span>
            </nav>
        </>
    )
}
