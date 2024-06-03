"use client";
import Image from "next/image";
import CompanyIcon from "@/public/assets/Icon.png";
import {useState} from "react";
import {FiMenu} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";

export default function Header() {
    const [sideBar, setSideBar] = useState(false);

    return (
        <div className="w-full z-50 max-w-7xl mx-auto sticky lg:mt-6 mt-2 mb-2 px-2">
            <section className="flex justify-between items-center">
                <ul className="hidden lg:flex flex-row gap-10 font-semibold">
                    <li><Image src={CompanyIcon} width={100} height={40} alt="Company icon" /></li>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Pricing</li>
                    <li>Features</li>
                </ul>
                <button className="hidden lg:block py-3 px-11 bg-black rounded-sm text-white">Download</button>
                <button onClick={() => setSideBar(!sideBar)} className="lg:hidden text-2xl flex flex-row gap-5 items-center">
                    <FiMenu />
                    <Image src={CompanyIcon} width={100} height={40} alt="Company icon" />
                </button>
            </section>

            <nav className={`fixed inset-0 bg-slate-50 transition-transform transform duration-200 ${sideBar ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
                <div className="flex justify-between items-center py-2 px-5 text-black text-xl">
                    <Image src={CompanyIcon} width={100} height={40} alt="Company icon" />
                    <button onClick={() => setSideBar(!sideBar)} className="text-xl">
                        <AiOutlineClose />
                    </button>
                </div>
                <section className="flex flex-col items-center gap-10 mt-36">
                    <ul className="flex flex-col items-center gap-12 font-semibold">
                        <li className="cursor-pointer" onClick={() => setSideBar(false)}>Home</li>
                        <li className="cursor-pointer" onClick={() => setSideBar(false)}>About us</li>
                        <li className="cursor-pointer" onClick={() => setSideBar(false)}>Pricing</li>
                        <li className="cursor-pointer" onClick={() => setSideBar(false)}>Features</li>
                    </ul>
                    <button onClick={() => setSideBar(false)} className="py-3 px-11 bg-black rounded-sm text-white hover:scale-105 active:scale-100 transition">
                        Download
                    </button>
                </section>
            </nav>
        </div>
    );
}
