import { BiLogoCss3,BiLogoHtml5,BiLogoJava,BiLogoJavascript,BiLogoNodejs,BiLogoPostgresql,BiLogoSpringBoot,BiLogoTailwindCss,BiLogoTypescript,} from "react-icons/bi";
import { SiPython,SiNextdotjs,SiReact,SiOracle,SiKalilinux,SiVmware,SiVirtualbox,SiGit,SiGithub} from "react-icons/si";
import { motion } from "framer-motion";



const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconBaseClasses =
    "cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]";

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center pt-28 gap-16 md:gap-5"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="mb-10 text-4xl font-light text-white"
      >
        Tecnologías
      </motion.h1>

      {/* Lenguajes de programación */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-5"
      >
        <h2 className="text-lg font-semibold text-gray-300">
          Lenguajes de programación
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <BiLogoJava
            title="Java"
            className={`${iconBaseClasses} text-red-600`}
          />
          <BiLogoJavascript
            title="JavaScript"
            className={`${iconBaseClasses} text-yellow-500`}
          />
          <BiLogoTypescript
            title="TypeScript"
            className={`${iconBaseClasses} text-sky-500`}
          />
          <BiLogoNodejs
            title="NodeJS"
            className={`${iconBaseClasses} text-green-500`}
          />
          <SiPython
            title="Python"
            className={`${iconBaseClasses} text-yellow-400`}
          />
        </div>
      </motion.div>

      {/* Frameworks y tecnologías */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-5"
      >
        <h2 className="text-lg font-semibold text-gray-300">
          Frameworks y tecnologías
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <BiLogoSpringBoot
            title="Spring Boot"
            className={`${iconBaseClasses} text-green-600`}
          />
          <SiNextdotjs
            title="NextJS"
            className={`${iconBaseClasses} text-white`}
          />
          <SiReact
            title="React"
            className={`${iconBaseClasses} text-sky-400`}
          />
          <BiLogoTailwindCss
            title="TailwindCSS"
            className={`${iconBaseClasses} text-sky-400`}
          />
          <BiLogoHtml5
            title="HTML"
            className={`${iconBaseClasses} text-orange-600`}
          />
          <BiLogoCss3
            title="CSS"
            className={`${iconBaseClasses} text-blue-500`}
          />
        </div>
      </motion.div>

      {/* Bases de datos */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-5"
      >
        <h2 className="text-lg font-semibold text-gray-300">Bases de datos</h2>
        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <BiLogoPostgresql
            title="PostgreSQL"
            className={`${iconBaseClasses} text-sky-500`}
          />
          <SiOracle
            title="Oracle"
            className={`${iconBaseClasses} text-red-500`}
          />
         
        </div>
      </motion.div>

      {/* Virtualización */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-5"
      >
        <h2 className="text-lg font-semibold text-gray-300">Virtualización</h2>
        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <SiKalilinux
            title="Linux Kali"
            className={`${iconBaseClasses} text-cyan-400`}
          />
          <SiVmware
            title="VMware"
            className={`${iconBaseClasses} text-blue-400`}
          />
          <SiVirtualbox
            title="VirtualBox"
            className={`${iconBaseClasses} text-sky-600`}
          />
        </div>
      </motion.div>

      {/* Control de versiones */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-5"
      >
        <h2 className="text-lg font-semibold text-gray-300">
          Control de versiones
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          <SiGit
            title="Git"
            className={`${iconBaseClasses} text-orange-500`}
          />
          <SiGithub
            title="GitHub"
            className={`${iconBaseClasses} text-white`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
