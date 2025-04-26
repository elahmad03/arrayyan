import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSatelliteDish, FaSimCard, FaMobileAlt, FaNetworkWired } from "react-icons/fa";

const services = [
  {
    title: "DSTV & Startimes Subscription",
    description: "Fast and reliable activation and renewal of DSTV, Startimes, and cable services.",
    icon: <FaSatelliteDish className="text-4xl text-blue-600 mx-auto" />,
  },
  {
    title: "SIM Card Registration",
    description: "Quick SIM registration and linking services for all major networks.",
    icon: <FaSimCard className="text-4xl text-blue-600 mx-auto" />,
    link: "/simcardreg",
  },
  {
    title: "Phone Accessories Sales",
    description: "Affordable, high-quality accessories like chargers, cases, earphones, and more.",
    icon: <FaMobileAlt className="text-4xl text-blue-600 mx-auto" />,
    link: "/accessories",
  },
  {
    title: "Internet Services",
    description: "Providing internet bundles, configuration, and connectivity solutions for homes and businesses.",
    icon: <FaNetworkWired className="text-4xl text-blue-600 mx-auto" />,
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Arrayyan Enterprises offers seamless telecommunication services to keep you connected anytime, anywhere.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const ServiceContent = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          );

          return service.link ? (
            <Link to={service.link} key={idx}>
              {ServiceContent}
            </Link>
          ) : (
            <div key={idx}>
              {ServiceContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
