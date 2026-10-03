import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavigation = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="header">
      <nav>
        <a
          href="#Home"
          className="logo"
          onClick={(event) => {
            event.preventDefault();
            handleNavigation("Home");
          }}
        >
          <img src="icons/PokeInfoLogo.png" alt="Logo" />
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span></span> <span></span> <span></span>
        </button>
        <ul className={menuOpen ? "menu-open" : ""}>
          <li>
            <a
              href="#Pokedex"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation("Pokedex");
              }}
            >
              Pokédex
            </a>
          </li>
          <li>
            <a
              href="#Types"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation("Types");
              }}
            >
              Tipos
            </a>
          </li>
          <li>
            <a
              href="#Gyms"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation("Gyms");
              }}
            >
              Gimnasios
            </a>
          </li>
          <li>
            <a
              href="#Leagues"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation("Leagues");
              }}
            >
              Ligas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
