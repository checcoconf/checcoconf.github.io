import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

// Definizione dell'interfaccia per il tipo Project
interface Project {
    title: string;
    description: string;
    image: string;
    link?: string; // Il link è opzionale
}

// Array dei progetti con titolo, descrizione, immagine e, se presente, un link al progetto
const projects: Project[] = projectsData;

// Varianti di animazione per il contenitore dei progetti
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

// Varianti di animazione per ogni singolo progetto
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5 }
    }
};

// Funzione principale che restituisce il componente Projects
export default function Projects() {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 md:mb-12 text-2xl md:text-3xl font-bold text-center text-[#FFD700]">
                    I Miei Ultimi Progetti
                </h2>

                {/* Contenitore animato per i progetti */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project: Project, index: number) => (
                        <motion.div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-lg border border-[#FFD700]/20"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Se il progetto ha un link, avvolge il contenuto con un tag <a> */}
                            {project.link ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ProjectContent project={project} />
                                </a>
                            ) : (
                                <ProjectContent project={project} />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Funzione che restituisce il contenuto di ogni progetto: immagine e descrizione
function ProjectContent({ project }: { project: Project }) {
    return (
        <>
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="p-4 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#FFD700]">{project.title}</h3>
                <p className="text-[#C0C0C0]">
                    {project.description?.split('\n').map((line: string, index: number) => (
                        <span key={index} className={index === 0 ? 'font-bold text-[#FFD700]' : ''}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
        </>
    );
}
