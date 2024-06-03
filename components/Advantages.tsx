import {GoBell} from "react-icons/go";
import IPhone from "@/public/assets/Iphone3rdSlide.png"
import Image from "next/image";
import Spray3 from "@/public/assets/Spray3.png"
export default function AdvantagesSection() {
    return (
        <>
            <div className="mt-24 lg:mt-12 font-custom tracking-wider flex flex-col lg:flex-row gap-10 lg:gap-20 w-full px-4">
                <section className="flex flex-col gap-8 w-full">
                    <article className="flex flex-col gap-2">
                        <p className="text-orange-600 text-2xl text-center lg:text-left">Features</p>
                        <h1 className="font-extrabold text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl">Why choose Urify? </h1>
                    </article>
                    <section className="flex flex-col gap-8 items-center lg:items-start ">
                        <h3 className="flex flex-row items-center gap-5"><span className="bg-orange-600 rounded-full text-white p-3"><GoBell className="lg:text-2xl text-lg" /></span><span className="lg:text-3xl text-xl font-semibold">Clever Notifications</span></h3>
                        <p className="text-center text-gray-600 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores reiciendis omnis quisquam modi enim, repellendus ullam, asperiores, ea voluptas officiis sit. Ex aliquid voluptatem laborum cum. Reprehenderit nesciunt in esse!</p>

                    </section>

                </section>
                <section className="w-full relative hidden lg:block">
                    <Image src={IPhone} alt="Iphone" />
                    <Image src={Spray3} alt="IPhoneFront1" className="absolute -left-10 -top-6 -z-10" />
                </section>

            </div>

        </>
    )

}
