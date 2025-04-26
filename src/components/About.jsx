import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-white dark:bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">About Arrayyan Enterprises</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Arrayyan Enterprises is a leading provider of innovative telecommunication services and solutions. We specialize in building seamless connectivity for businesses and communities, driving the future of communication.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-400">
            To connect the world through reliable, innovative, and customer-focused telecommunications. We strive to empower progress by bridging distances with cutting-edge technology and superior service.
          </p>
        </div>

        <img 
          src="/img/logo.png"
          alt="Telecommunication network"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default About;
