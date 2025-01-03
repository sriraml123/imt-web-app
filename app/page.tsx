import About from "@/app/components/about/page";
import Courses from "@/app/components/courses/page";
import Footer from "@/app/components/footer/page";
import Header from "@/app/components/header/page";
import OurServices from "@/app/components/services/page";
import HeroSection from "@/app/components/slide-image/page";
import LogoScroll from "./components/companies-scrolling/page";
import LearnerSupportSection from "./components/support-section/page";
import StatsDashboard from "./components/stats-dashboard/page";

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

        <LogoScroll />

        <StatsDashboard />

        <LearnerSupportSection />

      </div>
      <About />

      <Footer />
    </div>
  );
}
