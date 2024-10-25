import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { ImMail } from "react-icons/im";
import React from 'react';
import socialData from "../data/social.json";

// Definizione dell'interfaccia per i link social
interface SocialLink {
    href: string;
    icon: React.ElementType;
}

// Mappa delle icone per facilitare la ricerca
const iconMap: { [key: string]: React.ElementType } = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub,
    FaTelegram: FaTelegram,
    ImMail: ImMail
};

// Funzione che restituisce il componente Header
export default function Header() {
    // Mappa i dati JSON agli oggetti delle icone
    const socialLinks: SocialLink[] = socialData.map(link => ({
        href: link.href,
        icon: iconMap[link.icon] // Utilizza la mappa per ottenere l'icona corrispondente
    }));

    return (
        <header className="py-12 lg:py-20 text-center w-full px-4">
            <img
                src="/profilo.jpg"
                width={150}
                height={150}
                alt="Foto di Francesco Conforti"
                className="mx-auto rounded-full border-4 border-[#FFD700] shadow-lg"
            />
            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFD700] drop-shadow-lg">
                Francesco Conforti
            </h1>
            <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-[#FFD700] drop-shadow-lg">
                Sviluppatore Software
            </p>
            <div className="mt-8 flex justify-center space-x-4">
                {socialLinks.map((link: SocialLink, index: number) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFD700] hover:text-[#DAA520] transition-all drop-shadow-lg"
                    >
                        <link.icon size={30} />
                    </a>
                ))}
            </div>
        </header>
    );
}
