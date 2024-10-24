import Header from "../components/Header.tsx"
import Experience from "../components/Projects.tsx";
import SkillsCarousel from "../components/SkillsCarousel.tsx";
import Curriculum from "../components/CurriculumTimeline.tsx";
import Footer from "../components/Footer.tsx";

export default function Page() {
    return (
        <main className="bg-black">
            <Header/>
            <SkillsCarousel/>
            <Curriculum/>
            <Experience/>
            <Footer/>
        </main>
    )
}