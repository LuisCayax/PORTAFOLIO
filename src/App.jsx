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
        "Node.js & React",
        "Next.js (aprendiendo)"
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
           Soy Ingeniero en Sistemas con pensum cerrado y actualmente curso la Maestría en Análisis Forense Informático.
            Mi experiencia abarca el desarrollo web con Django, SQL, Node.js y React/Next.js, creando soluciones seguras, escalables y centradas en el usuario.

            Mi formación en ciberseguridad y análisis forense me permite aportar un enfoque único al desarrollo de software, priorizando la calidad,
            la seguridad y la resiliencia de las aplicaciones.

            Me considero una persona con mentalidad analítica, orientada a resultados y al trabajo en equipo, con habilidades de comunicación efectiva y capacidad de aprendizaje continuo. Estoy motivado por contribuir en proyectos que generen valor y crecimiento para las empresas.
          </p>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-white">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Formación Académica</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ingeniería en Sistemas</h3>
            <p className="text-gray-700">Pensum cerrado - Universidad Mariano Galvez de Guatemala</p>
            <p className="text-sm text-gray-500">Enfocado en desarrollo de software y gestión de proyectos.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Maestría en Análisis Forense Informático</h3>
            <p className="text-gray-700">4to trimestre - Universidad Mariano Galvez de Guatemala</p>
            <p className="text-sm text-gray-500">Especialización en ciberseguridad, investigación digital y respuesta a incidentes.</p>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Lo que aporto</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Resolución de problemas", desc: "Experiencia en debugging y optimización de código." },
            { title: "Trabajo en equipo", desc: "Colaboración en proyectos académicos y de desarrollo." },
            { title: "Comunicación efectiva", desc: "Claridad en documentación, soporte y revisiones de código." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-100">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Habilidades Técnicas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            "Node.js 🚀",
            "React.js ⚛️",
            "Next.js 🌐",
            "SQL 💾",
            "Python 🐍",
            "Django ⚡",
            "Git/GitHub 🔗",
            "Resolución de problemas 🛠️"
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
               Desarrollé una aplicación web con autenticación de usuarios, base de datos SQL y actualización en tiempo real, desplegada en Heroku y Hostinger.

                Este proyecto fue donado a una fundación que apoya a personas con discapacidad, con el objetivo de brindarles
                una plataforma funcional y accesible que mejore su gestión interna y sus servicios.
              </p>
              <a href="https://ompedis.com" target="_blank" className="text-indigo-600 font-medium">Ver proyecto →</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">En desarrollo</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Sistema de Barbería (MVP en Django)</h3>
            <p className="text-gray-700 mb-4">
              Aplicación en desarrollo con módulos de citas, usuarios y recordatorios. 
              Pensado para expandirse a un SaaS.
            </p>
            <span className="text-gray-500 text-sm">Estado: En construcción 🚧</span>
          </motion.div>
        </div>
      </section>

      {/* Footer with CTA */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p className="text-lg mb-4">¿Buscas un desarrollador comprometido y con visión?</p>
        <a href="mailto:luiscayax230316@gmail.com"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition">
          Contáctame
        </a>
        <p className="mt-6 text-sm">© {new Date().getFullYear()} Luis Eduardo Cayax Pérez | Construido con ❤️ usando React + Tailwind</p>
      </footer>
    </div>
  );
}
