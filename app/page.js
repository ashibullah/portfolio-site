import AboutSection from "./components/AboutSection";
import ContactMe from "./components/ContactMe";
import CountBar from "./components/CountBar";
import GitHubGraph from "./components/GithubGraph";
import HeroSection from "./components/HeroSection";
import MyProject from "./components/MyProjects";


export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection/>
      <CountBar/>
      <AboutSection/>
      <MyProject/>
      <ContactMe/>
      <GitHubGraph/>
    </div>
  );
}
