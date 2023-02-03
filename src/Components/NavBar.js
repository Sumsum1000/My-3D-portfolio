import style from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={style["navbar"]}>
      <NavLink to="/" className={style["nav-title"]}>
        {" "}
        My Portfolio
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? style["active"] : style["no-active"]
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/architecture"
        className={({ isActive }) =>
          isActive ? style["active"] : style["no-active"]
        }
      >
        Architecture
      </NavLink>
      <NavLink
        to="/exhibitions"
        className={({ isActive }) =>
          isActive ? style["active"] : style["no-active"]
        }
      >
        Exhibitions
      </NavLink>
      <NavLink
        to="/personal"
        className={({ isActive }) =>
          isActive ? style["active"] : style["no-active"]
        }
      >
        Personal
      </NavLink>
    </nav>
  );
};
