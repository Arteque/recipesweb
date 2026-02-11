import { useState, useEffect } from "react";
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.body.dataset.menuisopen = isOpen ? "true" : "false";
  }, [isOpen]);

  return (
    <button
      className="absolute top-6 right-6 lg:hidden"
      aria-controls="primary-navigation"
      aria-expanded={isOpen}
      onClick={toggleMenu}
    >
      <span className="sr-only">Toggle navigation</span>
      <img
        src="/Medias/Images/icon-hamburger-menu.svg"
        alt=""
        aria-hidden="true"
      />
    </button>
  );
};

export default BurgerMenu;
