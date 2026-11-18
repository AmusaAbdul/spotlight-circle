import { useState, useEffect } from 'react'

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? savedTheme === "dark" : true
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)

        localStorage.setItem("theme", darkMode ? "dark" : "light")
    }, [darkMode])

    return (
        <div className="border-border dark:border-border-dark border-[0px 0px 5px 0px] fixed w-full dark:bg-bg-dark bg-bg">
            <div className="container p-3 flex justify-between items-center w-fit ">
                <div className="flex gap-2">
                    <div className="bg-border-dark dark:bg-gold p-1 rounded-full">
                        <div className="dark:bg-border-dark bg-gold  rounded-full p-1">
                            <div className="h-3 w-3 rounded-full  dark:bg-gold bg-border-dark p-1"></div>
                        </div>
                    </div>
                    <h1 className="dark:text-surface text-surface-dark text-xl tracking-wide font-bold">SPOTLIGHT CIRCLE</h1>

                </div>
                <nav className="hidden md:flex gap-5">
                    <a className="hover:text-text dark:text-surface dark:hover:text-gold text-surface-dark duration-300 ease-in-out hover:scale-105 transition" href="#purpose">Purpose</a>
                    <a className="hover:text-text dark:text-surface dark:hover:text-gold text-surface-dark duration-300 ease-in-out hover:scale-105 transition" href="#gallery">Gallery</a>
                    <a className="hover:text-text dark:text-surface dark:hover:text-gold text-surface-dark duration-300 ease-in-out hover:scale-105 transition" href="#ticket">Tickets</a>
                </nav>
                <button onClick={() => setDarkMode(prev => !prev)}
                    className="border-2 border-border-dark dark:border-gold-dark hover:border hover:border-border-dark dark:hover:border-deepGold p-2 rounded h-10 w-10 flex justify-center items-center duration-300 ease-in-out hover:scale-105 transition">
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>
        </div>
    )
}

export default Navbar
