// Importazione delle icone necessarie dalle librerie di React Icons
import {FaLinkedin, FaGithub, FaTelegram} from 'react-icons/fa';  // Icone per LinkedIn, GitHub e Telegram
import {ImMail} from "react-icons/im";  // Icona per l'email

// Funzione che restituisce il componente Header
export default function Header() {
    return (
        // Sezione header con uno sfondo sfumato e testo centrato
        <header className="bg-gradient-to-r from-teal-400 to-cyan-500 py-12 lg:py-20 text-center text-white w-full px-4">

            {/* Immagine del profilo */}
            <img
                src="/profilo.jpg"  // Percorso dell'immagine del profilo
                width={150}  // Larghezza dell'immagine
                height={150}  // Altezza dell'immagine
                className="mx-auto rounded-full border-4 border-white shadow-lg"  // Immagine centrata, con bordo bianco arrotondato e ombra
            />

            {/* Nome del profilo */}
            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold">Francesco Conforti</h1>

            {/* Ruolo professionale */}
            <p className="mt-4 text-xl md:text-2xl lg:text-3xl">Sviluppatore Software</p>

            {/* Sezione per le icone social */}
            <div className="mt-8 flex justify-center space-x-4">
                {/* Collegamento a LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/confortifrancesco/"  // URL del profilo LinkedIn
                    target="_blank"  // Apre il link in una nuova scheda
                    rel="noopener noreferrer"  // Prevenzione di accessi indesiderati alla pagina principale
                    className="text-white hover:text-teal-200 transition-colors"  // Colore dell'icona che cambia al passaggio del mouse
                >
                    <FaLinkedin size={30}/>  {/* Icona di LinkedIn con dimensione di 30px */}
                </a>

                {/* Collegamento a GitHub */}
                <a
                    href="https://github.com/checcoconf"  // URL del profilo GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-200 transition-colors"
                >
                    <FaGithub size={30}/>  {/* Icona di GitHub */}
                </a>

                {/* Collegamento a Telegram */}
                <a
                    href="https://t.me/checcoconf"  // URL del profilo Telegram
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-200 transition-colors"
                >
                    <FaTelegram size={30}/>  {/* Icona di Telegram */}
                </a>

                {/* Collegamento per inviare un'email */}
                <a
                    href="mailto://francesco.conforti03@icloud.com"  // Collegamento mail per inviare un'email
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-200 transition-colors"
                >
                    <ImMail size={30}/>  {/* Icona dell'email */}
                </a>
            </div>
        </header>
    );
}
