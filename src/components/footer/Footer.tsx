import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-amber-100 pt-18 pb-18 ">
      <div className="bg-gray-800 text-center p-12">
        <h2 className="text-2xl font-semibold mb-2">
          Prenumerera på vårt nyhetsbrev
        </h2>
        <p className="mb-4">
          Få de senaste uppdateringarna direkt till din inkorg.
        </p>
        <div className="flex justify-center">
          <button className="bg-amber-900 px-4 py-2 rounded text-white font-semibold hover:bg-amber-600">
            Prenumerera
          </button>
        </div>
      </div>

      <div className="container mx-auto py-8 px-6 flex flex-col md:flex-row justify-center items-start gap-12 md:gap-44 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start text-amber-100">
          <h3 className="text-xl font-semibold mb-3 self-center">Kontakt</h3>
          <p>123 Hästvägen, 456 78 Staden</p>
          <p>Email: kontakt@exempel.se</p>
          <p>Telefon: 070-123 45 67</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-2 self-center">Följ oss</h3>
          <div className="flex space-x-6 mt-2">
            <a
              href="#"
              className="text-amber-100 hover:text-amber-600 text-2xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-amber-100 hover:text-amber-600 text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-amber-100 hover:text-amber-600 text-2xl transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
