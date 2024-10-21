
import {motion} from 'framer-motion'

const projects = [
    {
        title: "E-commerce App",
        description: "Un'applicazione di e-commerce completa con carrello e pagamenti.",
        image: "/copertina.PNG"
    },
    {
        title: "Task Manager",
        description: "Un'app per la gestione delle attività con funzionalità di drag-and-drop.",
        image: "/copertina.PNG"
    },
    {
        title: "Blog Platform",
        description: "Una piattaforma di blogging con funzionalità di commenti e condivisione.",
        image: "/copertina.PNG"
    }
]

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5}
    }
}

export default function Projects() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 md:mb-12 text-2xl md:text-3xl font-bold text-center text-teal-600">I Miei Ultimi
                    Progetti</h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg overflow-hidden shadow-md"
                            variants={itemVariants}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <img src={project.image} alt={project.title} className="w-full"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-teal-700">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
