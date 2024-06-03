import Icon from "@/public/assets/Icon.png"
import Image from "next/image"
import {BiSolidMessageDetail} from "react-icons/bi";
import {FaPhone} from "react-icons/fa6";
export default function Footer() {
    return (
        <div className="text-base w-full mt-32 flex items-start justify-between flex-row gap-24 text-gray-600">
            <section className="flex flex-col justify-center gap-5">
                <Image src={Icon} alt="Website icon" />

                <span className="flex flex-row gap-3 items-center "><span><BiSolidMessageDetail className="text-xl text-orange-600" /></span><p>Help@gmail.com</p> </span>
                <span className="flex flex-row gap-3 items-center "><span><FaPhone className="text-orange-600" /></span><p>+91 0394-2342-223</p> </span>
            </section>
            <section className="flex flex-col justify-center gap-5">
                <p className="text-2xl font-semibold">Links</p>
                <p>Home</p>
                <p>About Us</p>
                <p>Bookings</p>
                <p>Blog</p>
            </section>
            <section className="flex flex-col justify-center gap-5">
                <p className="text-2xl font-semibold">Legal</p>
                <p>Terms Of Use</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </section>
            <section className="flex flex-col justify-center gap-5">
                <p className="text-2xl font-semibold">Product</p>
                <p>Take Tour</p>
                <p>Live Chat</p>
                <p>Reviews</p>
            </section>
            <section className="flex flex-col justify-center gap-5">
                <p className="text-2xl font-semibold">Newsletter</p>
                <p>Stay Up To Date</p>
                <span>
                    <input type="text" placeholder="Your email" className="border-gray-200 py-5 pl-2  border" />
                    <button className="py-5 px-14 bg-black rounded-sm text-white text-base">Subscribe</button>
                </span>
            </section>

        </div>
    )
}
