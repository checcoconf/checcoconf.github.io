import {motion} from 'framer-motion'
import {Briefcase, GraduationCap, Award} from 'lucide-react'

const sections = [
    {
        title: "Esperienza Lavorativa", icon: Briefcase, items: [
            {
                title: "Co-Host",
                organization: <a href="https://g.co/kgs/Q5xrb9X" target={"_blank"}>Le Chiavi di San Pietro - Noci
                    (BA)</a>,
                description: "- Gestione prenotazioni e comunicazione con gli ospiti\n- Gestione social media\n- Massimizzazione visibilità online",
                year: "Luglio 2023 - Presente",
                downloadLink: null
            }
        ]
    },

    {
        title: "Istruzione", icon: GraduationCap, items: [
            {
                title: "Laurea triennale",
                organization: <a href="https://www.uniba.it/it" target={"_blank"}>Università degli Studi di Bari</a>,
                description: "Laurea Triennale in Informatica e Tecnologie per la Produzione del Software (L-31)",
                year: "Settembre 2022 - in corso",
                downloadLink: null
            },


            {
                title: "Diploma quinquennale ",
                organization: <a href="https://www.luigidellerba.edu.it/" target={"_blank"}>IISS Luigi dell'Erba -
                    Castellana Grotte (BA)</a>,
                description: "Indirizzo: ITIA - INFORMATICA E TELECOMUNICAZIONI - ARTICOLAZIONE INFORMATICA\nVotazione: 77/100 (settantasette su cento)",
                year: "Settembre 2017 - Giugno 2022",
                downloadLink: null
            }
        ]
    },
    {
        title: "Certificazioni", icon: Award, items: [
            {
                title: "Artificial Intelligence",
                organization: <a href="https://profession.ai/" target={"_blank"}>Profession AI</a>,
                description: "\n" +
                    "- Basi di Machine Learning supervisionato\n" +
                    "- Basi di Deep Learning\n" +
                    "- Multilayer Perceptron e reti neurali convoluzionali\n" +
                    "- Cenni di modelli generativi\n" +
                    "- Reti ricorrenti e trasformers\n" +
                    "- Google Colaboratory",
                year: "Giugno 2024",
                downloadLink: "https://mycourse.app/WWckMuNETVmG5Jnn8"  // Percorso del certificato
            },
        ]
    }
]

const containerVariants = {hidden: {opacity: 0}, visible: {opacity: 1, transition: {staggerChildren: 0.1}}}
const sectionVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}}
}
const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0, transition: {duration: 0.3, ease: "easeOut"}}
}

export default function CurriculumTimeline() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-3xl font-bold text-center text-teal-400">Il Mio Curriculum</h2>
                <motion.div className="space-y-16" variants={containerVariants} initial="hidden" animate="visible">
                    {sections.map((section, sectionIndex) => (
                        <motion.div key={sectionIndex} variants={sectionVariants}>
                            <div className="flex items-center mb-6">
                                <section.icon className="w-8 h-8 text-teal-500 mr-3"/>
                                <h3 className="text-2xl font-semibold text-teal-400">{section.title}</h3>
                            </div>
                            <div className="relative ml-4">
                                {section.items.map((item, itemIndex) => (
                                    <motion.div key={itemIndex} className="mb-8 flex items-start"
                                                variants={itemVariants}>
                                        <div className="mr-4 flex-shrink-0 mt-1">
                                            <div className="w-4 h-4 bg-teal-500 rounded-full"/>
                                        </div>
                                        <div className="flex-grow">
                                            <div
                                                className="bg-gray-800 rounded-lg p-6 shadow-lg border border-teal-500/20 relative">
                                                <h4 className="text-xl font-semibold mb-2 text-teal-400">{item.title}</h4>
                                                <p className="text-gray-300 font-medium mb-1">{item.organization}</p>
                                                {item.description.split("\n").map((line, index) => (
                                                    <p key={index} className="text-gray-400 mb-2">{line}</p>
                                                ))}
                                                <span className="text-teal-500 font-medium">{item.year}</span>

                                                {item.downloadLink && (
                                                    <a href={item.downloadLink} download
                                                       className="w-full text-center block sm:w-auto text-teal-500 font-semibold bg-teal-900 px-4 py-2 rounded-lg hover:bg-teal-700 mt-4 sm:absolute sm:bottom-4 sm:right-4">
                                                        Scarica il certificato
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-teal-500/20"/>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
