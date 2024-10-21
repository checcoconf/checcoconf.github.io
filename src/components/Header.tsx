import {FaLinkedin, FaGithub, FaTelegram} from 'react-icons/fa';
import {ImMail} from "react-icons/im";

export default function Header() {
    return (
        <header
            className="bg-gradient-to-r from-teal-400 to-cyan-500 py-12 lg:py-20 text-center text-white w-full px-4">
            <img
                src="/profilo.jpg"
                width={150}
                height={150}
                className="mx-auto rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold">Francesco Conforti</h1>
            <p className="mt-4 text-xl md:text-2xl lg:text-3xl">Sviluppatore Software</p>
            <div className="mt-8 flex justify-center space-x-4">
                <a
                    href="https://www.linkedin.com/in/confortifrancesco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-200 transition-colors"
                >
                    <FaLinkedin size={30}/>
                </a>
                <a
                    href="https://github.com/checcoconf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-200 transition-colors"
                >
                    <FaGithub size={30}/>
                </a>
                <a
                    href="https://t.me/checcoconf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-200 transition-colors"
                >
                    <FaTelegram size={30}/>
                </a>
                <a
                    href="mailto://francesco.conforti03@icloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-200 transition-colors"
                >
                    <ImMail size={30}/>
                </a>
            </div>
        </header>
    );
}
