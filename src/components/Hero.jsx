import image from "/public/yo.jpg"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div id="home" className="px-16 flex flex-col gap-10 min-h-screen w-full items-center justify-center py-28 md:px-32">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}


      >
        <img
          src={image}
          alt=""
          className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-red-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-red-600 md:w-[350px]"
        />

      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}

        className="flex max-w-[800px] flex-col items-center justify-center gap-3 text-center">
        <h1 className="bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
          Ramiro Martinez
        </h1>
        <h3 className="bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent text-2xl md:text-3xl">
          Desarrollador Web
        </h3>

        <p className="md:text-base text-pretty text-sm text-gray-400">
          Soy un estudiante de ingeniería de sistemas de 22 años, actualmente en 4to Año. Con una gran pasión por la tecnología, tengo una disposición constante para aprender y crecer en el campo del desarrollo web. Mi interés en la tecnología me impulsa a mantenerme actualizado y a adquirir nuevos conocimientos de forma continua, lo que me permite enfrentar con entusiasmo y dedicación los retos del ámbito tecnológico.</p>
      </motion.div>

    </div>
  )
}

export default Hero