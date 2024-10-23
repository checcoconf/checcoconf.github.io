// Importazione del modulo motion da Framer Motion per gestire animazioni fluide
import { motion } from 'framer-motion'

// Array dei progetti, con titolo, descrizione, immagine e link (se presente)
const projects = [
    {
        title: "CODING IN PROGRESS",  // Titolo del progetto
        description: "",  // Descrizione vuota, per un progetto in corso
        image: "/coding.png"  // Percorso dell'immagine di anteprima del progetto
    },
    {
        title: "CODING IN PROGRESS",  // Altro progetto in corso
        description: "",
        image: "/coding.png"
    },
    {
        title: "POSD SYSTEM",  // Titolo del progetto POSD SYSTEM
        description: "Università degli studi Aldo Moro - Bari | Anno Accademico 2023 - 2024 | Ingegneria del Software - Caso di studio",
        image: "/POSD_System.png",  // Immagine del progetto
        link: "https://github.com/checcoconf/POSD_System"  // Link al repository GitHub del progetto
    }
]

// Varianti di animazione per il contenitore dei progetti
const containerVariants = {
    hidden: { opacity: 0 },  // Il contenitore parte nascosto
    visible: {
        opacity: 1,  // Si rende visibile
        transition: {
            staggerChildren: 0.2  // Aggiunge un ritardo tra le animazioni dei figli (progetti)
        }
    }
}

// Varianti di animazione per ogni progetto
const itemVariants = {
    hidden: { opacity: 0, y: 20 },  // I progetti partono nascosti e spostati verso il basso
    visible: {
        opacity: 1, y: 0,  // Si rendono visibili e si spostano nella loro posizione finale
        transition: { duration: 0.5 }  // L'animazione dura 0.5 secondi
    }
}

// Funzione che restituisce il componente Projects
export default function Projects() {
    return (
        <section className="bg-white py-12 md:py-20">  {/* Sezione con sfondo bianco e padding */}
            <div className="container mx-auto px-4">  {/* Contenitore con margine e padding per allineamento */}
                <h2 className="mb-8 md:mb-12 text-2xl md:text-3xl font-bold text-center text-teal-600">I Miei Ultimi Progetti</h2>  {/* Titolo della sezione */}

                {/* Contenitore animato per i progetti */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"  // Griglia responsiva per la disposizione dei progetti
                    variants={containerVariants}  // Imposta le varianti di animazione per il contenitore
                    initial="hidden"  // Imposta lo stato iniziale nascosto
                    animate="visible"  // Esegue l'animazione di visibilità
                >
                    {projects.map((project, index) => (
                        // Animazione per ogni singolo progetto
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg overflow-hidden shadow-md"  // Progetto con sfondo gradiente e ombra
                            variants={itemVariants}  // Imposta le varianti di animazione per ogni progetto
                            whileHover={{ scale: 1.05 }}  // Anima il progetto al passaggio del mouse ingrandendolo
                            whileTap={{ scale: 0.95 }}  // Riduce leggermente la scala quando viene cliccato
                        >
                            {/* Se il progetto ha un link, lo rende cliccabile */}
                            {project.link ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img src={project.image} alt={project.title} className="w-full"/>  {/* Immagine del progetto */}
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2 text-teal-700">{project.title}</h3>  {/* Titolo del progetto */}
                                        <p className="text-gray-600">{project.description}</p>  {/* Descrizione del progetto */}
                                    </div>
                                </a>
                            ) : (
                                // Se non c'è un link, mostra solo l'immagine e la descrizione
                                <>
                                    <img src={project.image} alt={project.title} className="w-full"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2 text-teal-700">{project.title}</h3>
                                        <p className="text-gray-600">{project.description}</p>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
