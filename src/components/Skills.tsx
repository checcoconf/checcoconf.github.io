import {FaJava, FaPython, FaGithub} from 'react-icons/fa'
import {
    SiC,
    SiTypescript,
    SiMysql,
    SiJavascript,
    SiArduino,
    SiPostman,
    SiVisualstudio,
    SiClion,
    SiIntellijidea,
    SiPycharm,
    SiDatagrip
} from 'react-icons/si'
import {BiLogoMongodb} from 'react-icons/bi'

const programmingSkills = [
    {name: "C", icon: SiC},
    {name: "Java", icon: FaJava},
    {name: "Python", icon: FaPython},
    {name: "Javascript", icon: SiJavascript},
    {name: "Typescript", icon: SiTypescript}
]

const ides = [
    {name: "Clion", icon: SiClion},
    {name: "IntelliJ Idea", icon: SiIntellijidea},
    {name: "Pycharm", icon: SiPycharm},
    {name: "DataGrip", icon: SiDatagrip},
    {name: "Visual Studio", icon: SiVisualstudio},
    {name: "Arduino", icon: SiArduino}
]

const databases = [
    {name: "MySQL", icon: SiMysql},
    {name: "MongoDB", icon: BiLogoMongodb}
]

const tools = [
    {name: "Postman", icon: SiPostman},
    {name: "Github", icon: FaGithub}
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const SkillItem = ({skill}) => (
    <div className="flex flex-col items-center group">
        <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-125">
            <skill.icon size={48} className="text-teal-500"/>
        </div>
        <p className="mt-4 text-md text-center text-teal-700 font-medium">{skill.name}</p>
    </div>
)

export default function Skills() {
    return (
        <section className="bg-gradient-to-r from-teal-100 to-cyan-100 py-12 md:py-12">
            <h2 className="mb-10 md:mb-14 text-2xl md:text-3xl font-bold text-center text-teal-700">
                My Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
                <div className="flex-auto">
                    <h3 className="mb-6 text-xl md:text-2xl font-semibold text-center text-teal-700">
                        Programming Languages
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-4 lg:gap-6">
                        {programmingSkills.map((skill, index) => (
                            <SkillItem key={index} skill={skill}/>
                        ))}
                    </div>
                </div>

                <div className="flex-auto">
                    <h3 className="mb-6 text-xl md:text-2xl font-semibold text-center text-teal-700">
                        IDE
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-4 lg:gap-6">
                        {ides.map((ide, index) => (
                            <SkillItem key={index} skill={ide}/>
                        ))}
                    </div>
                </div>

                <div className="flex-auto">
                    <h3 className="mb-6 text-xl md:text-2xl font-semibold text-center text-teal-700">
                        Databases
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-4 md:gap-4 lg:gap-6">
                        {databases.map((database, index) => (
                            <SkillItem key={index} skill={database}/>
                        ))}
                    </div>
                </div>

                <div className="flex-auto">
                    <h3 className="mb-6 text-xl md:text-2xl font-semibold text-center text-teal-700">
                        Tools
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-4 md:gap-4 lg:gap-6">
                        {tools.map((tool, index) => (
                            <SkillItem key={index} skill={tool}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}