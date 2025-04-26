import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Arrayyan Enterprises</h2>
          <p className="text-sm leading-relaxed max-w-md">
            Arrayyan Enterprises specializes in a wide range of telecommunication services, 
            including DSTV subscriptions, airtime and recharge card sales, internet services, 
            mobile phones, and accessories. We strive to deliver quality and convenience to our customers.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex md:justify-end items-center gap-4">
          <a href="#" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition-transform">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-blue-500 hover:scale-110 transition-transform">
            <FaTwitter size={20} />
          </a>
          <a href="https://wa.me/+2348142641342" aria-label="WhatsApp" className="text-green-600 hover:scale-110 transition-transform">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="text-center text-sm text-gray-500 mt-6">
        Developed by <a href="https://wa.me/+2348164336141" className="text-green-600 font-semibold hover:underline">AhmadGlobe</a>
      </div>

      <div className="text-center text-sm text-gray-500 mt-2">
        © {new Date().getFullYear()} Hazmak Industries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
