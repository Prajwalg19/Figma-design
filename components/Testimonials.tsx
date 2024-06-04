"use client"
import Slide5 from "@/public/assets/Slide5.png";
import Spray3 from "@/public/assets/Spray3.png";
import Image from "next/image";
import Star from "@/public/assets/Star.png"
import WhiteStar from "@/public/assets/WhiteStar.png"
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

import TestimonialPeople from "@/public/assets/TestimonialPeople.png";

export default function Testimonials() {
    const {ref} = useInView({
        threshold: 1,
    });
    return (
        <motion.div ref={ref} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.6}}} viewport={{once: true}} className="mt-28 relative w-full max-w-7xl mx-auto px-4">
            <span className="w-full flex flex-col justify-center items-center text-center">
                <h1 className="text-2xl font-clashMedium">Testimonials</h1>
                <span className="text-4xl lg:text-5xl font-extrabold flex flex-col items-center justify-center font-clashBold">
                    <p>What our users</p>
                    <p>say about us?</p>
                </span>
            </span>

            <section className="flex flex-col md:flex-row gap-8 items-center justify-center mt-10">
                <div className="relative w-full max-w-lg">
                    <Image src={Slide5} alt="Slide5" className="w-full h-auto" />
                    <Image src={Spray3} alt="Spray3" className="dark:hidden block absolute left-1 top-24 -z-10 w-full max-w-lg" />
                    <span className="bg-purple-600 hidden dark:block blur-3xl rounded-full absolute left-20 top-24 -z-10 w-[10rem] md:w-[13rem] lg:w-[18rem] h-[18rem]" ></span>
                </div>

                <div className="flex flex-col gap-7 justify-center w-full max-w-lg px-4">
                    <p className="font-semibold text-2xl md:text-3xl font-clashSemiBold capitalize">The best financial accounting app ever!</p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300/90 font-clashMedium">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore aut obcaecati ea vero quod voluptatibus architecto? Laudantium numquam accusantium illum quos obcaecati amet dolore illo tenetur, veniam assumenda quaerat."</p>
                    <span className="flex flex-row gap-4 items-center">
                        <Image src={TestimonialPeople} alt="People" />
                        <p className="text-lg md:text-xl font-semibold text-center md:text-left text-gray-600/90 font-clashSemiBold">- Bingo Man</p>

                    </span>
                </div>
            </section>
            <Image src={Star} alt="Star" className="absolute dark:hidden hidden md:block right-16 top-8 rotate-45" />
            <Image src={Star} alt="Star" className="absolute dark:hidden left-16 hidden md:block bottom-8 rotate-45" />
            <Image src={WhiteStar} alt="Star" className="absolute hidden dark:md:block right-16 top-8 rotate-45" />
            <Image src={WhiteStar} alt="Star" className="absolute left-16 hidden dark:md:block bottom-8 rotate-45" />

        </motion.div>
    );
}
