import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import MyProject from "./components/MyProjects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <MyProject/>
    </div>
  );
}
