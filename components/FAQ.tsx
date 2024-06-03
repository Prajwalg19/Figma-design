import Image from "next/image";
import PlayStore from "@/public/assets/PlayStore.png";
import Spray from "@/public/assets/Spray3.png";

export default function FAQ() {
    return (
        <div className="w-full flex flex-col gap-14 px-4 lg:px-8">
            <div className="flex flex-col items-start gap-4 text-center lg:text-left">
                <p className="text-xl text-orange-600 tracking-widest">FAQ</p>
                <h1 className="text-3xl lg:text-6xl font-extrabold">Frequently asked <br className="hidden lg:block" /> questions</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 w-full">
                <section className="relative w-full flex flex-col lg:flex-row justify-center items-center bg-[#ff5556] px-4 py-8 text-white rounded-lg">
                    <div className="text-center lg:text-left">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
                <section className="relative w-full flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center shadow-lg border border-gray-200 p-8 text-black bg-white rounded-lg">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4 text-center lg:text-left">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base text-center lg:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 w-full">
                <section className="relative w-full flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center shadow-lg border border-gray-200 p-8 text-black bg-white rounded-lg">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4 text-center lg:text-left">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base text-center lg:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
                <section className="relative w-full flex flex-col lg:flex-row justify-center items-center bg-[#ff5556] px-4 py-8 text-white rounded-lg">
                    <div className="text-center lg:text-left">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 w-full">
                <section className="relative w-full flex flex-col lg:flex-row justify-center items-center bg-[#ff5556] px-4 py-8 text-white rounded-lg">
                    <div className="text-center lg:text-left">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
                <section className="relative w-full flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center shadow-lg border border-gray-200 p-8 text-black bg-white rounded-lg">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4 text-center lg:text-left">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base text-center lg:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
            </div>

            <div className="relative mx-auto mt-20 lg:mt-52">
                <Image src={Spray} alt="Spray" className="absolute -z-10 -top-16 -left-1/2 transform translate-x-1/2 lg:-left-64 w-full max-w-xs lg:max-w-lg" />
                <Image src={PlayStore} alt="PlayStore APP" className="w-32 lg:w-48 h-auto mt-10" />
            </div>
        </div>
    );
}
