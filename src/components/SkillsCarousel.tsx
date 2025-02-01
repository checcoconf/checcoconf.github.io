import { FaJava, FaPython, FaGitAlt, FaDocker, FaUbuntu } from 'react-icons/fa'; // Importa icone da FontAwesome
import {
    SiC,
    SiTypescript,
    SiMysql,
    SiJavascript,
    SiArduino,
    SiPostman,
    SiVisualstudio,
    SiClion,
    SiIntellijidea,
    SiPycharm,
    SiDatagrip,
    SiPostgresql
} from 'react-icons/si'; // Importa icone da SimpleIcons
import { BiLogoMongodb } from 'react-icons/bi'; // Importa icona MongoDB da Brandico
import React, { useEffect, useState, useRef } from "react"; // Importa hook di React
import skillsData from '../data/skills.json'; // Assicurati che il percorso sia corretto

// Definizione dell'interfaccia per le competenze
interface Skill {
    name: string;
    icon: React.ElementType; // Tipo dell'icona
}

// Mappa degli icone
const iconMap: { [key: string]: React.ElementType } = {
    "SiC": SiC,
    "FaJava": FaJava,
    "FaPython": FaPython,
    "SiJavascript": SiJavascript,
    "SiTypescript": SiTypescript,
    "SiClion": SiClion,
    "SiIntellijidea": SiIntellijidea,
    "SiPycharm": SiPycharm,
    "SiDatagrip": SiDatagrip,
    "SiMysql": SiMysql,
    "BiLogoMongodb": BiLogoMongodb,
    "SiArduino": SiArduino,
    "SiPostman": SiPostman,
    "FaGitAlt": FaGitAlt,
    "SiVisualstudio": SiVisualstudio,
    "SiPostgresql": SiPostgresql,
    "FaUbuntu": FaUbuntu,
    "FaDocker": FaDocker
};

// Definizione delle competenze di programmazione
const programmingSkills: Skill[] = skillsData.programmingSkills.map(skill => ({
    name: skill.name,
    icon: iconMap[skill.icon]
}));

// Definizione delle IDE
const ides: Skill[] = skillsData.ides.map(skill => ({
    name: skill.name,
    icon: iconMap[skill.icon]
}));

// Definizione dei database
const databases: Skill[] = skillsData.databases.map(skill => ({
    name: skill.name,
    icon: iconMap[skill.icon]
}));

// Definizione degli strumenti di sviluppo
const tools: Skill[] = skillsData.tools.map(skill => ({
    name: skill.name,
    icon: iconMap[skill.icon]
}));

// Componente per ogni competenza
const SkillItem = ({ skill }: { skill: Skill }) => (
    <div className="flex flex-col items-center group">
        <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-125">
            <skill.icon size={48} className="text-[#FFD700] group-hover:text-[#DAA520] transition-colors" />
        </div>
        <p className="mt-4 text-md text-center text-[#FFD700] font-medium">{skill.name}</p>
    </div>
);

// Componente principale del carosello delle competenze
export default function SkillsCarousel() {
    const sections = [
        { title: "Programming Languages", skills: programmingSkills },
        { title: "IDEs", skills: ides },
        { title: "Databases", skills: databases },
        { title: "Tools", skills: tools },
    ];

    const [currentSection, setCurrentSection] = useState<number>(0);
    const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const startXRef = useRef<number | null>(null);

    const resetAutoScroll = () => {
        setLastInteractionTime(Date.now());
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        startXRef.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        if (startXRef.current === null) return;

        const currentX = event.touches[0].clientX;
        const diffX = startXRef.current - currentX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                setCurrentSection((prevSection) => (prevSection + 1) % sections.length); // Swipe verso sinistra
            } else {
                setCurrentSection((prevSection) => (prevSection - 1 + sections.length) % sections.length); // Swipe verso destra
            }
            startXRef.current = null; // Resetta il valore dopo aver gestito lo swipe
            resetAutoScroll();
        }
    };

    const handleTouchEnd = () => {
        startXRef.current = null;
    };

    useEffect(() => {
        const updateSectionAutomatically = () => {
            if (Date.now() - lastInteractionTime >= 5000) {
                setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
            }
        };

        intervalRef.current = setInterval(updateSectionAutomatically, 5000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [lastInteractionTime, sections.length]);

    const goToSection = (index: number) => {
        setCurrentSection(index);
        resetAutoScroll();
    };

    return (
        <section
            className="py-6 sm:py-12 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <h2 className="mb-6 md:mb-10 text-2xl md:text-3xl font-bold text-center text-[#FFD700]">
                My Skills
            </h2>

            <div className="flex justify-center">
                <div className="w-full md:w-3/4 lg:w-1/2 min-h-[350px]">
                    <div className="transition-all duration-500 ease-in-out">
                        <div className="text-center mb-4 md:mb-6">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#FFD700]">
                                {sections[currentSection].title}
                            </h3>
                        </div>
                        <div className="grid gap-4 sm:gap-6 min-h-[300px] mt-10 grid-cols-2 sm:grid-cols-3">
                            {sections[currentSection].skills.map((skill: Skill, index: number) => (
                                <SkillItem key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                {sections.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
                            currentSection === index ? 'bg-[#FFD700]' : 'bg-[#DAA520]'
                        }`}
                        onClick={() => goToSection(index)}
                    />
                ))}
            </div>
        </section>
    );
}
