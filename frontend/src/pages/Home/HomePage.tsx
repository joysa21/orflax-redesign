import HeroSection from "../../components/ui/Hero/HeroSection"
import InfoSection from "../../components/ui/Info/InfoSection"
import Header from "../../components/layout/Header/Header"
import "./HomePage.module.scss"

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
     <InfoSection />
    </div>
  )
}

export default HomePage