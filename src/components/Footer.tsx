import { FaReact, FaLinkedin, FaGithub, FaTelegram, FaLaptopCode } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { ImMail } from "react-icons/im";
import { EmojiRender } from "../util/EmojiRender.tsx";
import React from "react";
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

// Funzione che restituisce il componente Footer
export default function Footer() {
    // Mappa i dati JSON agli oggetti delle icone
    const socialLinks: SocialLink[] = socialData.map(link => ({
        href: link.href,
        icon: iconMap[link.icon]
    }));

    return (
        <footer className="text-[#FFD700] py-5">
            <div className="lg:px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center justify-center md:justify-start space-x-4 w-full md:w-auto">
                    {socialLinks.map((link: SocialLink, index: number) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FFD700] hover:text-[#DAA520] transition-colors"
                        >
                            <link.icon size={28} />
                        </a>
                    ))}
                </div>

                <div className="text-center md:text-right mt-4 md:mt-0 lg:text-xl">
                    <p className="text-md">
                        Realizzato con{" "}
                        <FaReact className="inline animate-spin"
                                 style={{animationDuration: "1.65s", color: '#FFD700'}}/>
                        {" + "}
                        <RiTailwindCssFill className="inline" style={{color: '#FFD700'}}/>
                        {" + "}
                        <FaLaptopCode className="inline" style={{color: '#FFD700'}}/>
                    </p>
                    <span className="inline-flex items-center">
                        Designed by&nbsp;<span className="font-bold">Francesco Conforti</span> <EmojiRender><span className="ml-2">🇮🇹</span></EmojiRender>
                    </span>
                </div>
            </div>
        </footer>
    );
}
