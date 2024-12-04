import image1 from "/public/Login.png";
import image2 from "/public/tienda.png";
import image3 from "/public/Heroes.png";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Projects = () => {
  const projectsData = [
    {
      image: image1,
      title: "Login Tripify",
      description: "En este proyecto, he desarrollado una página de login simple para Tripify, una aplicación de viajes. Esta página fue creada utilizando HTML y CSS, y me permitió profundizar en el diseño de interfaces de usuario simples y atractivas.",
      technologies: ["HTML", "CSS"],
      link: "https://rami195.github.io/image-based-web-project/"
    },
    {
      image: image2,
      title: "Gestión de tienda",
      description: "En este proyecto, he creado una gestión de tienda de zapatillas en donde podemos agregar un elemento, modificarlo o eliminarlo. Estos elementos se ordenan en categorías de hombre, mujer y niño.",
      technologies: ["HTML", "CSS", "JS"],
      link: "https://gestion-tienda-c3gkrz78e-ramiros-projects-413d8ebf.vercel.app/"
    },
    {
      image: image3,
      title: "Heroes App",
      description: "Realicé una app interactiva en donde tenemos un login y luego podemos ver información de nuestros héroes favoritos y ordenarlos según su universo. usario: admin, contra: 1234.",
      technologies: ["HTML", "CSS", "JS", "React", "Typescript", "Redux"],
      link: "https://heroes-app-virid.vercel.app/Login",
    },
  ];

  const ScrollReveal = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  ScrollReveal.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const ProjectCard = ({ project }) => {
    return (
      <ScrollReveal>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">

          <img
            src={project.image}
            alt={project.title}
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
            </div>
            <p className="text-gray-400">{project.description} <a target="_blank"
              rel="noopener noreferrer" href={project.link} className="text-gray-600 hover:text-red-600 transition-all duration-300">
              Ver más
            </a>
            </p>
            <div className="flex flex-wrap gap-5">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-lg bg-black p-3 text-white cursor-pointer hover:bg-red-800 transition-all duration-300"
                >
                  {tech}
                </span>


              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  };

  ProjectCard.propTypes = {
    project: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string,
    }).isRequired,
  };

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Projectos</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <ScrollReveal>
        <h4 className="text-2xl font-light text-white md:text-3xl">Para ver más visita mi GitHub</h4>
      </ScrollReveal>

    </div>
  );
};

export default Projects;
