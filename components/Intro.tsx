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
import WhiteStar from "@/public/assets/WhiteStar.png"

export default function Intro() {
    return (
        <>
            <div className="z-0 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <Image src={Spray1} alt="Spray1" className="dark:hidden -z-10 absolute  -top-16 md:left-24 left-0" />
                <div className="hidden dark:block -z-10 bg-purple-700 absolute w-[15rem] h-[15rem] blur-3xl md:left-48 left-0"></div>
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <section className="relative flex flex-col gap-9 lg:w-1/2 text-center lg:text-left">
                        <p className="capitalize font-clashBold text-4xl sm:text-5xl lg:text-6xl">Make the best<br /> financial decisions</p>
                        <p className="text-gray-600 text-base sm:text-lg font-clashMedium dark:text-gray-300">Our services provide you with the scientific solutions to <br /> every business step you are about to take</p>
                        <span className="flex flex-col sm:flex-row gap-4 sm:gap-14 items-center justify-center lg:justify-start">
                            <button type="button" className="dark:border-gray-300/40 border py-4 w-full shadow-md sm:w-auto whitespace-nowrap px-11 group bg-black rounded-sm text-white flex flex-row justify-center items-center gap-2 font-clashSemiBold tracking-wider">
                                <span>Get Started</span>
                                <span><HiArrowLongRight className="text-gray-300 text-2xl group-hover:translate-x-2 transition ease-in-out" /></span>
                            </button>
                            <span className="cursor-pointer px-9 border border-gray-300 rounded-sm shadow-md flex gap-3 justify-center flex-row items-center py-[12px] w-full sm:w-auto group  hover:shadow-xl hover:scale-105 transition active:scale-100">
                                <FaRegCirclePlay className="text-2xl" />
                                <p className="text-lg text-nowrap font-clashSemiBold ">Watch Video</p>
                            </span>
                        </span>
                        <div className="relative mt-3">
                            <Image src={WhiteStar} width={50} height={50} alt="Star" className="hidden dark:block rotate-45 absolute top-[3rem] left-[8rem]" />
                            <Image src={Star} width={50} height={50} alt="Star" className="block dark:hidden rotate-45 absolute top-[3rem] left-[8rem]" />
                            <Image src={ZigZag} width={550} height={400} alt="ZigZag" className="" />
                        </div>
                    </section>

                    <section className="hidden -top-52 relative w-full lg:w-1/2 h-[500px] lg:flex justify-center items-center">
                        <Image src={IPhoneFront1} alt="iPhone" className="absolute xl:-top-4 lg:top-10 lg:-left-14 xl:-left-6 z-30 lg:max-w-[90%] xl:max-w-none" />
                        <Image src={IPhoneFront2} alt="iPhone" className="absolute lg:left-10 lg:top-24 xl:top-14 xl:left-24 z-20 lg:max-w-[90%] xl:max-w-none" />
                        <Image src={Frame} alt="Frame" className="absolute lg:top-16 lg:left-4 xl:-top-1 xl:left-24 z-10 lg:max-w-[90%] xl:max-w-none" />
                        <Image src={Spray2} alt="Spray2" className="dark:hidden block blur-3xl lg:blur-lg absolute top-6 left-24 z-0 max-w-[80%] lg:max-w-none" />
                        <span className="dark:block bg-purple-600 w-[15rem] h-[20rem] rounded-full hidden blur-3xl absolute top-[300px] left-24 z-0 max-w-[80%] lg:max-w-none" ></span>
                    </section>
                </div>
            </div>
        </>
    );
}
