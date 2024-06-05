import Intro from "@/components/Intro"
import FeatureSection from "@/components/FeaturesSection";
import AdvantagesSection from "@/components/Advantages";
import FullyCust from "@/components/FullyCustomizableSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Foooter";
export default function Home() {
    return (

        <main className="font-custom mx-auto max-w-7xl relative px-2 ">
            <Intro />
            <FeatureSection />
            <AdvantagesSection />
            <FullyCust />
            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    );
}
