import image1 from "/public/Login.png";
import image2 from "/public/tienda.png";
import image3 from "/public/Heroes.png";
import image4 from "/public/Bugs.png";
import image5 from "/public/landing.png";
import image6 from "/public/Ecommerce.png";
import image7 from "/public/ASAP.png";
import image8 from "/public/image8.png";
import image9 from "/public/lean.png";
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
      technologies: ["HTML", "CSS", "React", "Typescript", "Redux"],
      link: "https://heroes-app-virid.vercel.app/Login",
    },
    {
      image: image4,
      title: "BugsLess Design",
      description: "En este proyecto, desarrollé una página de contacto para BugsLess Design, una empresa que ofrece servicios web. La página está diseñada para que los clientes potenciales puedan ponerse en contacto fácilmente con la empresa y obtener información sobre los servicios ofrecidos.",
      technologies: ["Tailwind", "CSS", "JS", "React", "Redux"],
      link: "https://heroes-app-virid.vercel.app/Login",
    },
    {
      image: image5,
      title: "Landing Wines",
      description: "Desarrollé una Landing Page para un local de vinos. La página está diseñada para atraer a los visitantes y proporcionarles información detallada sobre los diferentes tipos de vinos disponibles.",
      technologies: ["Tailwind", "CSS", "React", "Typescript", "Redux"],
      link: "https://landing-wines.vercel.app/",
    },
    {
      image: image6,
      title: "VINEYARD",
      description: "Desarrollé una tienda para una bodega de vinos. La aplicación incluye un catálogo de productos, un sistema de registro y autenticación de usuarios, y un proceso de pago seguro.",
      technologies: ["Tailwind", "CSS", "React", "Typescript", "Redux"],
      link: "https://ecommerce-blue-chi.vercel.app/",
    },
      {
      image: image7,
      title: "ASAP Consultores",
      description: "Junto con mi equipo de BuglessDisign realizamos la pagina estilo landing page para la empresa ASAP.",
      technologies: ["Tailwind", "CSS", "React", "Typescript", "JS"],
      link: "https://www.asapconsultores.com.ar/",
    },
    {
     image: image8,
     title: "Sistema de Gestión de Inventario – MVP",
     description:"Desarrollé, junto con mi equipo, un sistema de gestión de inventario para el Trabajo Práctico de Investigación Operativa 2025. Incluye un frontend en Next.js para la visualización de datos y un backend en Node.js/Express con Prisma y PostgreSQL para la gestión de artículos, stock y ventas.",
     technologies: ["Next.js","React","TailwindCSS","Typescript","Node.js","Express","Prisma","PostgreSQL"],
     link: "https://github.com/TuteSeta/FullstockFront"
    },
    {
    image: image9,
    title: "Sitio Web Corporativo – Lean Vision",
    description:"Como parte de mi pasantía en Lean Vision colaboré en el desarrollo del sitio web corporativo de la empresa, utilizando React con Vite y TailwindCSS. Implementé componentes reutilizables, optimicé el rendimiento y participé en la maquetación responsive siguiendo la identidad visual de la marca.",
    technologies: ["React", "Vite", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    link: "https://leanvision.ai/" 
}
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
            <p className="text-gray-400">{project.description} <a href={project.link} className="text-red-600 hover:text-white hover:font-bold transition-all duration-300">
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
        <h1 className="text-4xl font-light text-white md:text-6xl">Proyectos</h1>
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
