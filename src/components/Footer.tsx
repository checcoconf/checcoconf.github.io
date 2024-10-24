import { FaReact, FaLinkedin, FaGithub, FaTelegram, FaLaptopCode } from 'react-icons/fa';  // Icone di React, LinkedIn, GitHub, Telegram
import { RiTailwindCssFill } from "react-icons/ri";  // Icona di Tailwind CSS
import { ImMail } from "react-icons/im";  // Icona per l'email
import { EmojiRender } from "../util/EmojiRender.tsx";  // Componente personalizzato per renderizzare gli emoji
import React from "react";

// Definizione dell'interfaccia per i link social
interface SocialLink {
    href: string;
    icon: React.ElementType;
}

// Array che contiene i link ai social e l'icona corrispondente
const socialLinks: SocialLink[] = [
    { href: "https://www.linkedin.com/in/confortifrancesco/", icon: FaLinkedin },  // Profilo LinkedIn
    { href: "https://github.com/checcoconf", icon: FaGithub },  // Profilo GitHub
    { href: "https://t.me/checcoconf", icon: FaTelegram },  // Profilo Telegram
    { href: "mailto:francesco.conforti03@icloud.com", icon: ImMail }  // Link per inviare un'email
];

// Funzione che restituisce il componente Footer
export default function Footer() {
    return (
        <footer className="bg-black text-[#FFD700] py-5">
            <div className="lg:px-6 flex flex-col md:flex-row justify-between items-center">

                {/* Sezione con le icone social */}
                <div className="flex items-center justify-center md:justify-start space-x-4 w-full md:w-auto">
                    {socialLinks.map((link: SocialLink, index: number) => (
                        // Mappa ogni link social e crea un'ancora per ogni icona con collegamento esterno
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"  // Apre il link in una nuova scheda
                            rel="noopener noreferrer"  // Sicurezza per evitare accessi indesiderati alla pagina principale
                            className="text-[#FFD700] hover:text-[#DAA520] transition-colors"  // Cambia colore al passaggio del mouse
                        >
                            <link.icon size={28} />
                            {/* Mostra l'icona social con dimensione 28px */}
                        </a>
                    ))}
                </div>

                {/* Testo del footer */}
                <div className="text-center md:text-right mt-4 md:mt-0 lg:text-xl">
                    {/* Paragrafo che mostra la tecnologia utilizzata */}
                    <p className="text-md">
                        Realizzato con{" "}
                        <FaReact className="inline animate-spin"
                                 style={{ animationDuration: "1.65s", color: '#FFD700' }} />
                        {" + "}
                        <RiTailwindCssFill className="inline" style={{ color: '#FFD700' }}/> {/* Icona di Tailwind CSS */}
                        {" + "}
                        <FaLaptopCode className="inline" style={{ color: '#FFD700' }}/>
                    </p>

                    {/* Nome del sito e emoji utilizzando il componente EmojiRender */}
                    <span className="inline-flex items-center">
                        Designed by <span className="ml-1"></span><strong>Francesco Conforti</strong> <EmojiRender><span className="ml-2">🇮🇹</span></EmojiRender>
                    </span>
                </div>
            </div>
        </footer>
    );
}
