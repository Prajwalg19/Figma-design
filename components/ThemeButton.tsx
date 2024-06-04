"use client"
import {FaRegMoon, FaSun} from "react-icons/fa";
import {themeState} from "@/context/ThemeSwitcher";
export default function ThemeButton() {
    const {theme, changeTheme} = themeState();
    return (
        <button type="button" className="fixed  bottom-6 right-6 sm:bottom-8 sm:right-8 bg-opacity-50 dark:border-slate-300  bg-white p-3 rounded-full border border-black/10 shadow-lg transition-all backdrop-blur-[0.5rem] hover:scale-[1.15] active:scale-105 dark:bg-gray-950 dark:border-white/40" onClick={changeTheme}>
            {theme == "light" ? <FaSun className="text-xl" /> : <FaRegMoon className="dark:text-slate-300 text-black text-xl" />}
        </button>

    )
}

