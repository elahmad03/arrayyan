import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Road Construction – Adamawa State',
    image: '/projects/banner.png', // Replace with real paths later
    description: 'Completed 5km of durable road for rural accessibility under tight deadlines.',
  },
  {
    title: 'Food Supply to Public Schools',
    image: '/projects/banner.png',
    description: 'Partnered with the government to deliver nutritious meals to over 50 schools.',
  },
  {
    title: 'Warehouse Construction – Adamawa',
    image: '/projects/banner.png',
    description: 'Built a large-scale warehouse for agro-processing and packaging storage.',
  },
  {
    title: 'Building Materials Distribution',
    image: '/projects/banner.png',
    description: 'Supplied materials to over 120 contractors across three states.',
  },
];

const Projects = () => {
  return (
    <section className="bg-white dark:bg-gray-700 max-w-7xl mx-auto px-4 py-16 mt-25">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Our Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          These are just a few of the projects we’ve successfully completed across different sectors.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
