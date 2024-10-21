import {FaReact, FaLinkedin, FaGithub, FaTelegram} from 'react-icons/fa'
import {RiTailwindCssFill} from "react-icons/ri"
import {ImMail} from "react-icons/im"
import {EmojiRender} from "../util/EmojiRender.tsx";

const socialLinks = [
    {href: "https://www.linkedin.com/in/confortifrancesco/", icon: FaLinkedin},
    {href: "https://github.com/checcoconf", icon: FaGithub},
    {href: "https://t.me/checcoconf", icon: FaTelegram},
    {href: "mailto:francesco.conforti03@icloud.com", icon: ImMail}
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-5">
            <div className="lg:px-6 flex flex-col md:flex-row justify-between items-center">

                {/* Social Icons */}
                <div className="flex items-center justify-center md:justify-start space-x-4 w-full md:w-auto">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-200"
                        >
                            <link.icon size={28}/>
                        </a>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="text-center md:text-right mt-4 md:mt-0 lg:text-xl">
                    <span className="inline-flex items-center">
                        checcoconf.it <EmojiRender><span className="ml-2">💻 🇮🇹</span></EmojiRender>
                    </span>
                    <p className="text-md">
                        Realizzato con{" "}
                        <FaReact className="inline animate-spin" style={{animationDuration: "2s"}}/>
                        {" + "}
                        <RiTailwindCssFill className="inline"/>
                    </p>
                </div>

            </div>
        </footer>
    )
}
