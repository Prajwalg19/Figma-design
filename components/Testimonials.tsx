import Slide5 from "@/public/assets/Slide5.png";
import Spray3 from "@/public/assets/Spray3.png";
import Image from "next/image";
import TestimonialPeople from "@/public/assets/TestimonialPeople.png";

export default function Testimonials() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <span className="mt-28 w-full flex flex-col justify-center items-center text-center">
                <h1 className="text-2xl">Testimonials</h1>
                <span className="sm:text-4xl lg:text-5xl font-extrabold flex flex-col items-center justify-center">
                    <p>What our users</p>
                    <p>say about us?</p>
                </span>
            </span>

            <section className="flex flex-col md:flex-row gap-8 items-center justify-center mt-10">
                <div className="relative w-full max-w-lg">
                    <Image src={Slide5} alt="Slide5" className="w-full h-auto" />
                    <Image src={Spray3} alt="Spray3" className="absolute left-1 top-24 -z-10 w-full max-w-lg" />
                </div>

                <div className="flex flex-col gap-7 justify-center w-full max-w-lg px-4">
                    <p className="font-semibold text-2xl md:text-3xl">The best financial accounting app ever!</p>
                    <p className="text-base md:text-lg">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore aut obcaecati ea vero quod voluptatibus architecto? Laudantium numquam accusantium illum quos obcaecati amet dolore illo tenetur, veniam assumenda quaerat."</p>
                    <span className="flex flex-row gap-4 items-center">
                        <Image src={TestimonialPeople} alt="People" />
                        <p className="text-lg md:text-xl font-semibold text-center md:text-left">- Bingo Man</p>

                    </span>
                </div>
            </section>
        </div>
    );
}
