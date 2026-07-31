import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold">Portofolio</h1>
            </div>
            <div className="flex items-center sm:gap-6 gap-3">
            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 theme-nav backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li>
                    <a href="#beranda" className="sm:text-lg text-base font-medium">
                        Beranda
                    </a>
                </li>
                <li>
                    <a href="#tentang" className="sm:text-lg text-base font-medium">
                        Tentang
                    </a>
                </li>
                <li>
                    <a href="#proyek" className="sm:text-lg text-base font-medium">
                        Proyek
                    </a>
                </li>
                <li>
                    <a href="#kontak" className="sm:text-lg text-base font-medium">
                        Kontak
                    </a>
                </li>
            </ul>
            <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="surface-card theme-border border w-11 h-11 rounded-full cursor-pointer hover:text-violet-500 transition-colors z-50"
                aria-label={`Aktifkan tema ${theme === "dark" ? "terang" : "gelap"}`}
                title={`Aktifkan tema ${theme === "dark" ? "terang" : "gelap"}`}
            >
                <i className={theme === "dark" ? "ri-sun-line ri-lg" : "ri-moon-line ri-lg"}></i>
            </button>
            </div>
        </div>
    )
}

export default Navbar
