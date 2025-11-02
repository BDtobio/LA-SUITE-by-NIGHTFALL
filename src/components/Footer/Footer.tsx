import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black
    text-white py-6 w-full text-center">
      
      <div className="flex flex|    justify-center items-center space-2-4 mb-4">
        <a href="https://wa.me/yourphonenumber" className="mx-4 text-2xl hover:text-green-500 transition-all">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/nightfallgroup_/" className="mx-4 text-2xl hover:text-pink-600 transition-all">
          <FaInstagram />
        </a>
        {/* <a href="https://www.tiktok.com/@yourusername" className="mx-4 text-2xl hover:text-purple-600 transition-all">
          <FaTiktok />
        </a> */}
        <a href="mailto:your@email.com" className="mx-4 text-2xl hover:text-blue-500 transition-all">
          <FaEnvelope />
        </a>
      </div>


      {/* Derechos reservados */}
      <p>&copy; 2025 LA SUITE by Night Fall | Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
