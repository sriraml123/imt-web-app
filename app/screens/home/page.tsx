import About from "@/app/components/about/page";
import Courses from "@/app/components/courses/page";
import Footer from "@/app/components/footer/page";
import Header from "@/app/components/header/page";
import OurServices from "@/app/components/services/page";
import HeroSection from "@/app/components/slide-image/page";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Header />

            <div>
                <HeroSection />
            </div>

            <div>
                <Courses />

                <OurServices />

            </div>
            <About />

            <Footer />
        </div>
    );
}
