import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Building2, TrendingUp, Users, MessageCircle, ChevronLeft, ChevronRight, Home, Hammer } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-2xl font-bold"
          >
            <span className="text-red-600">Contrucciones</span> & <span className="text-red-600"> Reformas </span> Narvaez
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['inicio', 'quienes-somos', 'servicios', 'proyectos', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-red-600 transition-colors duration-300 capitalize"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            {['inicio', 'quienes-somos', 'servicios', 'proyectos', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-white hover:text-red-600 py-2 capitalize"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          <span className="text-red-600"> Contruscciones </span> & <span className="text-red-600">Reformas</span> con confianza
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Especialistas en construcción y reformas, haciendo realidad tu hogar ideal.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-red-600/50"
        >
          Contáctanos
        </motion.button>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="quienes-somos" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Quiénes <span className="text-red-600">Somos</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-black mb-6">Nuestra Historia</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              En Huelva, Construcciones y Reformas Narváez nace de la pasión por transformar espacios y hacer realidad los sueños de nuestros clientes. Con más de 15 años de experiencia en el sector de la construcción y reformas, nuestro fundador ha trabajado en una amplia variedad de proyectos: desde la construcción de viviendas totalmente personalizadas hasta reformas completas de baños, cocinas y habitaciones.
            </p>
            <p className="text-gray-700 text-lg mb-6  leading-relaxed">
              Durante más de 5 años atendiendo a clientes en Huelva, nos hemos ganado la confianza de la comunidad gracias a nuestra alta eficiencia, atención al detalle y resultados de calidad. Cada proyecto lo abordamos con compromiso y profesionalismo, asegurándonos de que cada espacio cumpla con las expectativas de nuestros clientes.
            </p>
            <p className="text-gray-700 text-lg mb-6  leading-relaxed">
              Elegir Construcciones y Reformas Narváez significa confiar en un equipo que convierte ideas en hogares funcionales y estéticamente perfectos. Tu reforma no es solo un trabajo: es nuestra promesa de excelencia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-8 shadow-2xl">
              <div className="text-white space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <Users className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">100+</p>
                    <p className="text-gray-300">Clientes Satisfechos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <Building2 className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">200+</p>
                    <p className="text-gray-300">Proyectos Completados</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <TrendingUp className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">10+</p>
                    <p className="text-gray-300">Años de Experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Construcción de Viviendas',
      description: 'Diseñamos y construimos casas a medida, adaptadas a las necesidades y gustos de cada cliente. Garantizamos materiales de calidad, cumplimiento de plazos y acabados profesionales.'
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Reformas Integrales',
      description: 'Estrategias personalizadas de marketing que aumentan tu visibilidad online y generan resultados medibles para tu negocio.'
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Reformas de Espacios Específicos',
      description: 'Especialistas en reformas de baños, cocinas y habitaciones, con soluciones modernas, funcionales y duraderas que mejoran tu confort y el valor de tu propiedad.'
    }
  ];

  return (
    <section id="servicios" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-red-600">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 group"
            >
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Before/After Component
const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'Construcción salón',
      location: 'Huelva',
      before: '/salon_antes.jpeg',
      after: '/salon_despues.jpeg',
      description: 'Transformación completa de espacio residencial con diseño contemporáneo'
    },
    {
      id: 2,
      title: 'Renovación de cocina',
      location: 'Beas',
      before: '/cuarto_antes.jpeg',
      after: '/cuarto_despues.jpeg',
      description: 'Renovación de cocina con finos acabados'
    },
    {
      id: 3,
      title: 'Contrucción de espacio común',
      location: 'Monterrey',
      before: '/sala_antes.jpeg',
      after: '/sala_despues.jpeg',
      description: 'Proyecto de expansión de un area común'
    },
    {
      id: 4,
      title: 'Restauración de Fachada',
      location: 'Puebla',
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      description: 'Renovación exterior con materiales modernos y eficiencia energética'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section id="proyectos" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nuestros <span className="text-red-600">Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Descubre la transformación que hemos logrado en cada uno de nuestros proyectos de construcción y remodelación
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Project Info */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-2">{currentProj.title}</h3>
            <p className="text-gray-600 text-lg mb-4">{currentProj.location}</p>
            <p className="text-gray-700 max-w-2xl mx-auto">{currentProj.description}</p>
          </div>

          {/* Before/After Toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-lg bg-gray-200 p-1">
              <button
                onClick={() => setShowBefore(true)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  showBefore
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                Antes
              </button>
              <button
                onClick={() => setShowBefore(false)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  !showBefore
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                Después
              </button>
            </div>
          </div>

          {/* Image Display */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <motion.img
              key={showBefore ? 'before' : 'after'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={showBefore ? currentProj.before : currentProj.after}
              alt={showBefore ? 'Antes' : 'Después'}
              className="w-full h-96 md:h-[600px] object-cover"
            />
            
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
              {showBefore ? 'ANTES' : 'DESPUÉS'}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevProject}
              className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold">Anterior</span>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-red-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextProject}
              className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              <span className="font-semibold">Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg font-semibold">
              Proyecto {currentProject + 1} de {projects.length}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            <span className="text-red-600">Contáctenos</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-2xl p-8 shadow-xl"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-black font-semibold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-black font-semibold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300"
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-black font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 resize-none"
              placeholder="Cuéntanos sobre tu proyecto..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} <span className="text-red-600 font-semibold">Contrucciones & Reformas Narvaez</span>. Todos los derechos reservados.
        </p>
        <p className="text-gray-400">
          tel: +34 641884268
        </p>
        <p className="text-gray-400">
          Huelva - España
        </p>
      </div>
    </footer>
  );
};

// WhatsApp Button Component
const WhatsAppButton = () => {
  const whatsappNumber = '+34641884268'; // Reemplaza con tu número

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-50 hover:brightness-110"
      style={{ backgroundColor: '#25D366' }}
    >
      <MessageCircle className="w-20 h-20" />
    </motion.a>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}