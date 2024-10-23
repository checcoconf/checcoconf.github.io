import {FaJava, FaPython, FaGithub} from 'react-icons/fa'; // Importa icone da FontAwesome
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
    SiDatagrip
} from 'react-icons/si'; // Importa icone da SimpleIcons
import {BiLogoMongodb} from 'react-icons/bi'; // Importa icona MongoDB da Brandico
import {useEffect, useState, useRef} from "react"; // Importa hook di React

// Definizione delle competenze di programmazione con i relativi nomi e icone
const programmingSkills = [
    {name: "C", icon: SiC},
    {name: "Java", icon: FaJava},
    {name: "Python", icon: FaPython},
    {name: "Javascript", icon: SiJavascript},
    {name: "Typescript", icon: SiTypescript}
];

// Definizione delle IDE (ambienti di sviluppo integrato) con i relativi nomi e icone
const ides = [
    {name: "Clion", icon: SiClion},
    {name: "IntelliJ Idea", icon: SiIntellijidea},
    {name: "Pycharm", icon: SiPycharm},
    {name: "DataGrip", icon: SiDatagrip},
    {name: "Visual Studio", icon: SiVisualstudio},
    {name: "Arduino", icon: SiArduino}
];

// Definizione dei database con i relativi nomi e icone
const databases = [
    {name: "MySQL", icon: SiMysql},
    {name: "MongoDB", icon: BiLogoMongodb}
];

// Definizione degli strumenti di sviluppo con i relativi nomi e icone
const tools = [
    {name: "Postman", icon: SiPostman},
    {name: "Github", icon: FaGithub}
];

// Definizione del componente per ogni competenza
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const SkillItem = ({skill}) => (
    <div className="flex flex-col items-center group">
        <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-125">
            {/* Mostra l'icona della competenza con effetto hover */}
            <skill.icon size={48} className="text-teal-500"/>
        </div>
        {/* Mostra il nome della competenza */}
        <p className="mt-4 text-md text-center text-teal-700 font-medium">{skill.name}</p>
    </div>
);

// Componente principale che gestisce il carosello delle competenze
export default function SkillsCarousel() {
    // Sezioni che contengono le categorie di competenze, IDE, database e strumenti
    const sections = [
        {title: "Programming Languages", skills: programmingSkills},
        {title: "IDEs", skills: ides},
        {title: "Databases", skills: databases, layout: 'centered'},
        {title: "Tools", skills: tools, layout: 'centered'},
    ];

    // Stato per tracciare la sezione corrente visualizzata
    const [currentSection, setCurrentSection] = useState(0);
    // Stato per tracciare l'ultima interazione con il carosello
    const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
    // Riferimento per l'intervallo di tempo del carosello automatico
    const intervalRef = useRef(null);

    // Funzione per resettare l'intervallo del carosello quando c'è interazione
    const resetAutoScroll = () => {
        setLastInteractionTime(Date.now());
    };

    // Effetto per aggiornare automaticamente la sezione dopo un certo intervallo di tempo
    useEffect(() => {
        const updateSectionAutomatically = () => {
            if (Date.now() - lastInteractionTime >= 4000) { // Passa alla prossima sezione ogni 4 secondi
                setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
            }
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // Imposta l'intervallo per aggiornare la sezione
        intervalRef.current = setInterval(updateSectionAutomatically, 4000);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // Pulizia dell'intervallo quando il componente viene smontato
        return () => clearInterval(intervalRef.current);
    }, [lastInteractionTime, sections.length]);

    // Funzione per andare a una sezione specifica quando viene cliccato il navigatore
    const goToSection = (index: number) => {
        setCurrentSection(index);
        resetAutoScroll(); // Resetta il timer automatico al clic
    };

    // Ritorna il JSX che definisce il carosello delle competenze
    return (
        <section className="bg-gradient-to-r from-teal-100 to-cyan-100 py-12 md:py-12 overflow-hidden">
            <h2 className="mb-10 md:mb-14 text-2xl md:text-3xl font-bold text-center text-teal-700">
                My Skills
            </h2>

            <div className="flex justify-center">
                <div className="w-full md:w-3/4 lg:w-1/2">
                    <div className="transition-all duration-500 ease-in-out">
                        <div className="text-center mb-6">
                            {/* Mostra il titolo della sezione corrente */}
                            <h3 className="text-xl md:text-2xl font-semibold text-teal-700">
                                {sections[currentSection].title}
                            </h3>
                        </div>
                        <div className={`grid gap-6 sm:gap-4 md:gap-4 lg:gap-6 ${
                            sections[currentSection].layout === 'centered'
                                ? 'grid-cols-2' // Se la sezione è centrata, usa due colonne
                                : 'grid-cols-2 sm:grid-cols-3' // Altrimenti usa tre colonne per schermi più grandi
                        }`}>
                            {/* Mostra le competenze della sezione corrente */}
                            {sections[currentSection].skills.map((skill, index) => (
                                <SkillItem key={index} skill={skill}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigatore circolare per cambiare manualmente sezione */}
            <div className="flex justify-center mt-8">
                {sections.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
                            currentSection === index ? 'bg-teal-700' : 'bg-teal-300' // Cambia colore in base alla sezione corrente
                        }`}
                        onClick={() => goToSection(index)} // Cambia sezione al clic
                    />
                ))}
            </div>
        </section>
    );
}
