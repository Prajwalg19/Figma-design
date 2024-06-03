import IPhoneSlide4 from "@/public/assets/IPhoneSlide4.png"
import Image from "next/image"
import Spray3 from "@/public/assets/Spray3.png"
import Star from "@/public/assets/Star.png"
import {PiStarFour} from "react-icons/pi";
export default function FullyCust() {
    return (
        <div className="mt-24 lg:mt-0 font-custom tracking-wider relative flex flex-col lg:flex-row gap-10 lg:gap-20 w-full px-4">
            <div className="hidden lg:block relative w-full">
                <Image src={IPhoneSlide4} alt="IPhoneFront4" className="" width={650} height={700} />
                <Image src={Spray3} alt="IPhoneFront4" className="absolute -left-10 -top-10 -z-10" />
            </div>
            <div className="flex flex-col gap-8 items-center lg:items-start justify-center">
                <span className="flex flex-row items-center gap-5">
                    <span className="bg-orange-600 rounded-full text-white p-3"><PiStarFour className="lg:text-2xl text-lg" /> </span>
                    <span className="lg:text-3xl text-xl font-semibold">Fully Customizable</span>
                </span>
                <Image src={Star} alt="Star" className="absolute -left-16 top-8 rotate-45" />

                <span className="text-center lg:text-left text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores eligendi maxime temporibus facilis quod facere tenetur voluptatem ut id placeat obcaecati dolor repellendus, cum ex nulla impedit atque ab?
                </span>
            </div>

        </div>


    )
}
