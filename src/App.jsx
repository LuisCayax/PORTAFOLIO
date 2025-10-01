import { motion } from "framer-motion";
import { useEffect } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: [
        "Web Developer",
        "Forensic Analyst",
        "Django & SQL",
        "React & Next.js (aprendiendo)"
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 text-gray-900 font-sans">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center relative overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x opacity-20 blur-3xl"></div>

        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-6 relative z-10"
        >
          Hola, soy <span className="text-indigo-600">Luis Cayax</span>
        </motion.h1>
        <span className="typed text-2xl text-gray-800 relative z-10"></span>

        {/* Social links */}
        <div className="flex gap-8 mt-8 relative z-10">
          <a href="https://github.com/LuisCayax" target="_blank" 
            className="p-4 rounded-full backdrop-blur-lg bg-white/30 shadow-lg hover:scale-110 transition text-3xl text-gray-800">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/luis-eduardo-cayax-perez-b967a4320" target="_blank" 
            className="p-4 rounded-full backdrop-blur-lg bg-white/30 shadow-lg hover:scale-110 transition text-3xl text-blue-700">
            <FaLinkedin />
          </a>
          <a href="mailto:luiscayax230316@gmail.com" 
            className="p-4 rounded-full backdrop-blur-lg bg-white/30 shadow-lg hover:scale-110 transition text-3xl text-red-600">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-3xl bg-white/40 backdrop-blur-lg border border-indigo-200 shadow-xl"
        >
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">Sobre mí</h2>
          <p className="text-lg leading-relaxed">
            Soy <b>Desarrollador Web</b> y <b>Analista Forense Informático</b> con experiencia en 
            <b> Django</b>, <b>SQL</b> y desarrollo de sistemas de gestión. 
            Me destaco por crear soluciones seguras, escalables y orientadas al usuario. 
            Actualmente estoy fortaleciendo mis conocimientos en <b>Node.js</b>, <b>React.js</b> y <b>Next.js</b>.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-100">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            "Python 🐍",
            "Django ⚡",
            "SQL 💾",
            "JavaScript ✨",
            "Git/GitHub 🔗",
            "Node.js 🚀",
            "React.js ⚛️",
            "Next.js 🌐"
          ].map((skill, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className="p-6 bg-white rounded-2xl shadow-xl text-center font-medium hover:shadow-2xl transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-20 px-6" id="projects">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Proyecto 1 */}
          <motion.div whileHover={{ scale: 1.03 }} 
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src="/images/django.png" alt="Proyecto Django" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Sistema Web en Django</h3>
              <p className="mb-4 text-gray-700">
                Proyecto en producción con autenticación, base de datos SQL y actualización en tiempo real. 
                Desplegado en <b>Heroku</b> y <b>Hostinger</b>.
              </p>
              <a href="https://ompedis.com" target="_blank" className="text-indigo-600 font-medium">Ver proyecto →</a>
            </div>
          </motion.div>

          {/* Proyecto 2 */}
          <motion.div whileHover={{ scale: 1.03 }} 
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src="https://picsum.photos/600/301" alt="CRUD React" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">CRUD en React</h3>
              <p className="mb-4 text-gray-700">
                Aplicación CRUD para gestionar tareas. Ejemplo de frontend moderno con React 
                y consumo de API.
              </p>
              <a href="#" target="_blank" className="text-indigo-600 font-medium">Ver proyecto →</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} Luis Eduardo Cayax Pérez | Construido con ❤️ usando React + Tailwind</p>
      </footer>
    </div>
  );
}
