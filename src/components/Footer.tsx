// Importazione delle icone necessarie dalle librerie di React Icons
import {FaReact, FaLinkedin, FaGithub, FaTelegram} from 'react-icons/fa'  // Icone di React, LinkedIn, GitHub, Telegram
import {RiTailwindCssFill} from "react-icons/ri"  // Icona di Tailwind CSS
import {ImMail} from "react-icons/im"  // Icona per l'email
import {EmojiRender} from "../util/EmojiRender.tsx";  // Componente personalizzato per renderizzare gli emoji

// Array che contiene i link ai social e l'icona corrispondente
const socialLinks = [
    {href: "https://www.linkedin.com/in/confortifrancesco/", icon: FaLinkedin},  // Profilo LinkedIn
    {href: "https://github.com/checcoconf", icon: FaGithub},  // Profilo GitHub
    {href: "https://t.me/checcoconf", icon: FaTelegram},  // Profilo Telegram
    {href: "mailto:francesco.conforti03@icloud.com", icon: ImMail}  // Link per inviare un'email
];

// Funzione che restituisce il componente Footer
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-5">
            <div className="lg:px-6 flex flex-col md:flex-row justify-between items-center">

                {/* Sezione con le icone social */}
                <div className="flex items-center justify-center md:justify-start space-x-4 w-full md:w-auto">
                    {socialLinks.map((link, index) => (
                        // Mappa ogni link social e crea un'ancora per ogni icona con collegamento esterno
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"  // Apre il link in una nuova scheda
                            rel="noopener noreferrer"  // Sicurezza per evitare accessi indesiderati alla pagina principale
                            className="text-white hover:text-teal-200"  // Cambia colore al passaggio del mouse
                        >
                            <link.icon size={28}/>  {/* Mostra l'icona social con dimensione 28px */}
                        </a>
                    ))}
                </div>

                {/* Testo del footer */}
                <div className="text-center md:text-right mt-4 md:mt-0 lg:text-xl">
                    {/* Nome del sito e emoji utilizzando il componente EmojiRender */}
                    <span className="inline-flex items-center">
                        checcoconf.it <EmojiRender><span className="ml-2">💻 🇮🇹</span></EmojiRender>  {/* Emoji personalizzati */}
                    </span>

                    {/* Paragrafo che mostra la tecnologia utilizzata */}
                    <p className="text-md">
                        Realizzato con{" "}
                        <FaReact className="inline animate-spin" style={{animationDuration: "2s"}}/>  {/* Icona di React che ruota lentamente */}
                        {" + "}
                        <RiTailwindCssFill className="inline"/>  {/* Icona di Tailwind CSS */}
                    </p>
                </div>

            </div>
        </footer>
    )
}
