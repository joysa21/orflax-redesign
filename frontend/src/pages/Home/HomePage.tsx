import HeroSection from "../../components/ui/Hero/HeroSection"
import InfoSection from "../../components/ui/Info/InfoSection"
import "./HomePage.module.scss"
import AboutSection from "../../components/ui/About/AboutSection"

function HomePage() {
  return (
    <div className="p-0">
    <HeroSection />
    <InfoSection />
    <AboutSection />
    </div>
  )
}

export default HomePage