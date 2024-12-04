import { BiLogoCss3, BiLogoDocker, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import {motion} from "framer-motion"

const Tech = () => {
  const variants={
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0}
  }

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center 
    gap-16 md:gap-5">
      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="text-4xl font-light text-white mb-10">Tecnologias</motion.h1>

      <motion.div 
       variants={variants}
       initial="hidden"
       whileInView="visible"
       transition={{duration:0.5}}
      className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div >
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300
        hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>

        <motion.div >
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300
        hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>

        <motion.div >
          <BiLogoDocker className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300
        hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>

        <motion.div >
          <BiLogoJava className="cursor-pointer text-[80px] text-red-600 transition-all duration-300
        hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>
      </motion.div>
      <motion.div 
       variants={variants}
       initial="hidden"
       whileInView="visible"
       transition={{duration:0.5}}
      className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div >
          <BiLogoSpringBoot className="cursor-pointer text-[80px] text-green-600 transition-all duration-300
             hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>

        <motion.div >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300
            hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>

        <motion.div >
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300
            hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>
      </motion.div>

      <motion.div 
       variants={variants}
       initial="hidden"
       whileInView="visible"
       transition={{duration:0.5}}
      className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div >
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-red-700 transition-all duration-300
           hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>
        <motion.div >
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300
             hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>

      </motion.div>

      <motion.div 
       variants={variants}
       initial="hidden"
       whileInView="visible"
       transition={{duration:0.5}}
      
      lassName="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div >
          <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300
            hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Tech