import Spray1 from "@/public/assets/Spray1.png";
import Image from "next/image";
import {HiArrowLongRight} from "react-icons/hi2";
import {FaRegCirclePlay} from "react-icons/fa6";
import ZigZag from "@/public/assets/ZigZag.png";
import Star from "@/public/assets/Star.png";
import IPhoneFront1 from "@/public/assets/iPhone-13-Pro-Front.png";
import IPhoneFront2 from "@/public/assets/iPhone-13-Pro-Front_2.png";
import Spray2 from "@/public/assets/Spary2.png";
import Frame from "@/public/assets/Frame 1.png";

export default function Intro() {
    return (
        <>
            <div className="z-0 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <Image src={Spray1} alt="Spray1" className="-z-10 absolute  -top-16 md:left-24 left-8" />
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <section className="relative flex flex-col gap-9 lg:w-1/2 text-center lg:text-left">
                        <p className="capitalize font-extrabold text-4xl sm:text-5xl lg:text-6xl">Make the best<br /> financial decisions</p>
                        <p className="text-gray-600 text-base sm:text-lg">Our services provide you with the scientific solutions to <br /> every business step you are about to take</p>
                        <span className="flex flex-col sm:flex-row gap-4 sm:gap-14 items-center justify-center lg:justify-start">
                            <button type="button" className="py-4 w-full shadow-md sm:w-auto whitespace-nowrap px-11 group bg-black rounded-sm text-white flex flex-row justify-center items-center gap-2">
                                <span>Get Started</span>
                                <span><HiArrowLongRight className="text-gray-300 text-2xl group-hover:translate-x-2 transition ease-in-out" /></span>
                            </button>
                            <span className="cursor-pointer px-11 border border-gray-300 rounded-sm shadow-md flex gap-3 justify-center flex-row items-center py-4 w-full sm:w-auto group">
                                <FaRegCirclePlay className="text-2xl" />
                                <p className="text-lg ">Watch Video</p>
                            </span>
                        </span>
                        <div className="relative mt-3">
                            <Image src={Star} width={50} height={50} alt="Star" className="rotate-45 absolute top-[3rem] left-[8rem]" />
                            <Image src={ZigZag} width={550} height={400} alt="ZigZag" />
                        </div>
                    </section>

                    <section className="hidden -top-52 relative w-full lg:w-1/2 h-[500px] lg:flex justify-center items-center">
                        <Image src={IPhoneFront1} alt="iPhone" className="absolute -top-4 -left-6 z-30  max-w-[80%] lg:max-w-none" />
                        <Image src={IPhoneFront2} alt="iPhone" className="absolute top-14 left-24 z-20 max-w-[80%] lg:max-w-none" />
                        <Image src={Frame} alt="Frame" className="absolute -top-1 left-24 z-10 max-w-[80%] lg:max-w-none" />
                        <Image src={Spray2} alt="Spray2" className="blur-3xl lg:blur-lg absolute top-6 left-24 z-0 max-w-[80%] lg:max-w-none" />
                    </section>
                </div>
            </div>
        </>
    );
}
