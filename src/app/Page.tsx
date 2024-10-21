import Header from "../components/Header.tsx"
import Experience from "../components/Projects.tsx";
import Skills from "../components/Skills.tsx";
import Curriculum from "../components/CurriculumTimeline.tsx";
import Footer from "../components/Footer.tsx";

export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100 text-gray-800">
            <Header/>
            <Skills/>
            <Curriculum/>
            <Experience/>
            <Footer/>
        </main>
    )
}