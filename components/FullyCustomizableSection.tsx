"use client"
import IPhoneSlide4 from "@/public/assets/IPhoneSlide4.png"
import Image from "next/image"
import Spray3 from "@/public/assets/Spray3.png"
import Star from "@/public/assets/Star.png"
import {PiStarFour} from "react-icons/pi";
import WhiteStar from "@/public/assets/WhiteStar.png"
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

export default function FullyCust() {
    const {ref} = useInView({
        threshold: 1,
    });
    return (
        <motion.div ref={ref} initial={{opacity: 0, x: -35}} whileInView={{opacity: 1, x: 0, transition: {duration: 0.6}}} viewport={{once: true}} className="mt-24 lg:mt-0 font-custom tracking-wider relative flex flex-col lg:flex-row gap-10 lg:gap-20 w-full px-4">
            <div className="hidden lg:block relative w-full">
                <Image src={IPhoneSlide4} alt="IPhoneFront4" className="" width={650} height={700} />
                <Image src={Spray3} alt="IPhoneFront4" className="absolute -left-10 -top-10 -z-10 block dark:hidden" />
                <span className="absolute left-10 top-10 -z-10 dark:block hidden bg-purple-600 rounded-full blur-3xl w-[18rem] h-[18rem]" ></span>
            </div>
            <div className="flex flex-col gap-8 items-center lg:items-start justify-center">
                <span className="flex flex-row items-center gap-5">
                    <span className="bg-orange-600 rounded-full text-white p-3"><PiStarFour className="lg:text-2xl text-lg" /> </span>
                    <span className="lg:text-3xl text-xl font-semibold font-clashSemiBold">Fully Customizable</span>
                </span>
                <Image src={Star} alt="Star" className="md:block dark:hidden absolute -left-16 top-8 rotate-45" />
                <Image src={WhiteStar} alt="Star" className="dark:md:block hidden absolute -left-16 top-8 rotate-45" />
                <span className="dark:text-gray-300/90 text-center lg:text-left text-gray-600 text-lg font-clashMedium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores eligendi maxime temporibus facilis quod facere tenetur voluptatem ut id placeat obcaecati dolor repellendus, cum ex nulla impedit atque ab?
                </span>
            </div>

        </motion.div>


    )
}
