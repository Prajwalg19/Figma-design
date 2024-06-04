import Image from "next/image";
import Spray3 from "@/public/assets/Spray3.png";
import Spray1 from "@/public/assets/Spray1.png";
import {IoCubeOutline, IoStarHalfSharp} from "react-icons/io5";
import {TbBrandPrisma} from "react-icons/tb";
import IPhoneSlide2 from "@/public/assets/IphoneSlide2.png";
import Star from "@/public/assets/Star.png"
import WhiteStar from "@/public/assets/WhiteStar.png"

export default function FeatureSection() {
    return (
        <>
            <div className="font-custom relative tracking-wider mt-0 lg:mt-8 flex flex-col lg:flex-row gap-10 lg:gap-20 w-full px-4">
                <Image src={Spray1} className="dark:hidden block absolute blur-3xl w-[60%] lg:w-auto lg:-right-36 -z-10" alt="Spray" />
                <span className="dark:block hidden absolute blur-3xl w-[60%] lg:w-auto lg:-right-36 -z-10 bg-purple-600 rounded-full" ></span>
                <div className="relative w-full hidden lg:block">
                    <Image src={IPhoneSlide2} alt="IPhoneFront1" className="" width={650} height={700} />
                    <Image src={Spray3} alt="Spray3" className="dark:hidden block absolute -left-10 -top-10 -z-10" />
                    <span className="absolute left-36 top-36 -z-10 dark:block hidden w-[20rem] h-[20rem] rounded-full blur-3xl bg-purple-600" ></span>
                </div>
                <div className="mt-14 flex flex-col gap-8 w-full">
                    <section className="flex flex-col gap-2">
                        <p className="text-orange-500 text-center lg:text-left text-2xl">Features</p>
                        <h1 className="font-extrabold text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl">Urify Premium</h1>
                    </section>
                    <section className="flex flex-col gap-2">
                        <p className="text-lg font-semibold flex flex-row gap-2 justify-center lg:justify-start items-center">
                            <IoCubeOutline className="text-orange-500 font-semibold text-2xl" />
                            <span >Budgeting Intervals</span>
                        </p>
                        <h1 className="text-center lg:text-left text-gray-600 dark:text-gray-300/90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea obcaecati vel assumenda, rem repellat et vitae.</h1>
                    </section>
                    <section className="flex flex-col gap-2">
                        <p className="text-lg font-semibold flex flex-row gap-2 justify-center lg:justify-start items-center">
                            <IoStarHalfSharp className="text-orange-500 font-semibold text-2xl" />
                            <span>Budgeting Intervals</span>
                        </p>
                        <h1 className="text-center lg:text-left text-gray-600 dark:text-gray-300/90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea obcaecati vel assumenda, rem repellat et vitae.</h1>
                    </section>
                    <section className="flex flex-col gap-2">
                        <p className="text-lg font-semibold flex flex-row gap-2 justify-center lg:justify-start items-center">
                            <TbBrandPrisma className="text-orange-500 font-semibold text-2xl" />
                            <span>Budgeting Intervals</span>
                        </p>
                        <h1 className="text-center lg:text-left text-gray-600 dark:text-gray-300/90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea obcaecati vel assumenda, rem repellat et vitae.</h1>
                    </section>
                </div>
                <Image src={Star} alt="Star" className="absolute hidden md:block right-16 top-8 rotate-45" />
                <Image src={WhiteStar} alt="Star" className="absolute hidden md:block right-16 top-8 rotate-45" />

            </div>
        </>
    );
}
