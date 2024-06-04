import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import ThemeSwitcher from "@/context/ThemeSwitcher";
import ThemeButton from "@/components/ThemeButton";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Landing page",
    description: "Business standard landing page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} relative`} >
                <ThemeSwitcher>
                    <Header />
                    {children}
                    <ThemeButton />

                </ThemeSwitcher>
            </body>
        </html>
    );
}
