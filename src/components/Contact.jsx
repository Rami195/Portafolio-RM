

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent">
            Ponte en contacto
          </span>


        </h1>

        <p className="text-center text-lg font-semibold text-gray-500">
          ¿Quieres charlar? Envíame un correo electrónico a través de este botón o contactame en mis redes y te responderé.
        </p>
        <a href="mailto:ramiromartinez3596@gmail.com" className="text-nowrap rounded-lg border border-red-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-red-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600">
          Contactame
        </a>
      </div>
    </div>
  )

}

export default Contact