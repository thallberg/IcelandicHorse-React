import { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { GiHorseHead } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navbarTitle = location.pathname == "/" ? "Swings Islandshästar" : "Hem";

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-amber-600/95 shadow-md py-0" : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-16 transition-all duration-300">
        <div className="flex items-center ml-4 md:ml-8">
          <GiHorseHead className="size-8 text-white transition-colors duration-500" />
          <Link
            to="/"
            className="ml-2 text-white transition-colors duration-500"
          >
            {navbarTitle}
          </Link>
        </div>

        <div className="hidden md:flex mr-8">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/booking"
                className="text-white hover:text-amber-200 transition-colors duration-500"
              >
                Boka
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-amber-200 transition-colors duration-500"
              >
                Om oss
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-amber-200 transition-colors duration-500"
              >
                Kontakta
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-white hover:text-amber-200 transition-colors duration-500"
              >
                Galleri
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden flex items-center mr-4">
          {menuOpen ? (
            <HiMiniXMark
              className="size-8 cursor-pointer text-white transition-colors duration-500"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiBars3
              className="size-8 cursor-pointer text-white transition-colors duration-500"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-amber-700/95 z-50 transform transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ marginTop: scrolled ? "4rem" : "5.5rem" }}
      >
        <ul
          className="flex flex-col p-6 gap-6 items-center mt-4"
          onClick={handleClick}
        >
          <li>
            <Link to="/booking" className="block py-2 text-white text-lg">
              Boka
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 text-white text-lg">
              Om oss
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 text-white text-lg">
              Kontakta
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="block py-2 text-white text-lg">
              Galleri
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
