import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkScreenWidth();

    const handleResize = () => {
      checkScreenWidth();
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`navbar ${isSticky ? "sticky" : ""} ${
        isMobile ? "mobile" : ""
      }`}
    >
      <div className="logo">Logo</div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeclassname="active">
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact Us
          </NavLink>
        </li>
      </ul>
      {isMobile && (
        <div
          className={`hamburger ${isMenuOpen ? "" : "open"}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
