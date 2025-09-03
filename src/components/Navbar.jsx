import { useState, useEffect } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-20 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-2 md:py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        RM
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Inicio</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tecnologias</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Proyectos</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contacto</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
       
    
        <li>
          <a target="_blank"
            rel="noopener noreferrer"
            href="www.linkedin.com/in/ramiro-martinez-315666252"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Rami195"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
          >
            <BsGithub />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div className="fixed right-0 top-full flex h-screen w-1/2 flex-col items-start justify-start gap-10 border border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Inicio</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tecnologias</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projectos</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contacto</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/ramiii_martinez/"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/RamiM53?t=cjKBqFLUcOSWdO7L7ZcY6A&s=09"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
              >
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ramiro-martinez-315666252/"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Rami195"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
