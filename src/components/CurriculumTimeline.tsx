import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import React from "react";
import curriculumData from '../data/curriculum.json';

// Definizione dell'interfaccia per gli item di ogni sezione
interface SectionItem {
    title: string;
    organization: {
        name: string;
        url: string;
    };
    description: string;
    year: string;
    downloadLink: string | null;
}

// Definizione dell'interfaccia per una sezione
interface Section {
    title: string;
    icon: React.ElementType;
    items: SectionItem[];
}

// Mappatura delle icone dal nome al componente
const iconMap: { [key: string]: React.ElementType } = {
    Briefcase: Briefcase,
    GraduationCap: GraduationCap,
    Award: Award,
};

// Utilizza i dati importati e mappa le icone
const sections: Section[] = curriculumData.map(section => ({
    ...section,
    icon: iconMap[section.icon], // Imposta l'icona utilizzando la mappatura
}));

// Varianti di animazione per il contenitore, le sezioni e gli elementi
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }  // Ritardo tra la visualizzazione dei figli
    }
};

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },  // Partono nascoste e spostate verso il basso
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: "easeOut" }  // Animazione verso la posizione finale
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },  // Ogni item inizia nascosto e spostato a sinistra
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.3, ease: "easeOut" }  // Animazione di transizione
    }
};

// Componente principale del curriculum con animazioni
export default function CurriculumTimeline() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-3xl font-bold text-center text-[#FFD700]">Il Mio Curriculum</h2>

                {/* Contenitore animato che racchiude le sezioni */}
                <motion.div className="space-y-16" variants={containerVariants} initial="hidden" animate="visible">
                    {sections.map((section, sectionIndex) => (
                        // Animazione per ogni sezione del curriculum
                        <motion.div key={sectionIndex} variants={sectionVariants}>
                            <div className="flex items-center mb-6">
                                <section.icon className="w-8 h-8 text-[#FFD700] mr-3" /> {/* Icona della sezione */}
                                <h3 className="text-2xl font-semibold text-[#FFD700]">{section.title}</h3>
                            </div>

                            {/* Contenuto della sezione */}
                            <div className="relative ml-4">
                                {section.items.map((item, itemIndex) => (
                                    // Animazione per ogni item della sezione
                                    <motion.div key={itemIndex} className="mb-8 flex items-start" variants={itemVariants}>
                                        <div className="mr-4 flex-shrink-0 mt-1">
                                            <div className="w-4 h-4 bg-[#FFD700] rounded-full" /> {/* Indicatore di item */}
                                        </div>
                                        <div className="flex-grow">
                                            {/* Contenitore dell'item */}
                                            <div className="rounded-lg p-6 shadow-lg border border-[#FFD700]/20 relative">
                                                <h4 className="text-xl font-semibold mb-2 text-[#FFD700]">{item.title}</h4>
                                                <p className="text-[#D4AF37] font-medium mb-1">
                                                    <a href={item.organization.url} target="_blank" rel="noopener noreferrer">{item.organization.name}</a>
                                                </p>

                                                {/* Descrizione suddivisa in righe */}
                                                {item.description.split("\n").map((line, index) => (
                                                    <p key={index} className="text-[#C0C0C0] mb-2">{line}</p>
                                                ))}

                                                <span className="text-[#FFD700] font-medium">{item.year}</span>

                                                {/* Bottone per scaricare il certificato se disponibile */}
                                                {item.downloadLink && (
                                                    <a href={item.downloadLink} download
                                                       className="w-full text-center block sm:w-auto text-[#C0C0C0] font-semibold bg-[#111111] px-4 py-2 rounded-lg border border-[#FFD700] hover:bg-[#1C1C1C] mt-4 sm:absolute sm:bottom-4 sm:right-4 transition-all duration-300 ease-in-out">
                                                        Scarica il certificato
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                {/* Linea verticale di collegamento degli item */}
                                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-[#FFD700]/20" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
