import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Services from './Services';

const Showcase = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-4">
          Welcome to <span className="text-blue-600">Arrayyan Enterprises</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Empowering connections through innovative telecommunication solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition cursor-pointer"
          >
            Our Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer"
          >
            Get in Touch
          </ScrollLink>
        </div>
      </motion.div>
    </main>
  );
};

export default Showcase;
