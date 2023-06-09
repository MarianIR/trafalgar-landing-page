import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 969) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="page-header">
      <img
        src="../src/images/logo.png"
        alt="This is page's logo"
        className="page-logo"
      />
      <button className="menu-btn" onClick={toggleMenu}>
        {isOpen ? (
          <img
            src="../src/images/icon-hamburger.svg"
            alt="Open menu button"
            className="open-menu"
          />
        ) : (
          <img
            src="./src/images/icon-close.svg"
            alt="Close menu button"
            className="close-menu"
          />
        )}
      </button>
      {windowWidth > 969 || !isOpen ? (
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-element">
              <a href="#" className="nav-link home">
                Home
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Find a doctor
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Apps
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                Testimonials
              </a>
            </li>
            <li className="nav-element">
              <a href="#" className="nav-link">
                About us
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
