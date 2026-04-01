import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className={flex({
        justify: "space-between",
        align: "center",
        p: "6",
        lg: { px: "20" },
        bg: "linear-gradient(135deg, #000000 0%, #0a2a22 50%)",
      })}
    >
      {/* LOGO */}
      <div className={flex({ align: "center", gap: "2" })}>
        <div className={css({ fontSize: "2xl", fontWeight: "bold", color: "white" })}>
          ✦
        </div>
        <span
          className={css({
            textTransform: "uppercase",
            fontSize: "xs",
            letterSpacing: "widest",
            color: "white",
          })}
        >
          Your Logo
        </span>
      </div>

      {/* MENU */}
      <div
        className={flex({
          gap: "8",
          align: "center",
          display: { base: "none", md: "flex" },
        })}
      >
        {/* HOME */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            css({
              fontSize: "sm",
              color: isActive ? "white" : "white",
              borderBottom: isActive ? "2px solid white" : "none",
              pb: "1",
              transition: "0.3s",
            })
          }
        >
          Home
        </NavLink>

        {/* ABOUT */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            css({
              fontSize: "sm",
              color: isActive ? "white" : "white",
              borderBottom: isActive ? "2px solid white" : "none",
              pb: "1",
              transition: "0.3s",
            })
          }
        >
          About Us
        </NavLink>

        {/* PRODUCT */}
        <NavLink
          to="/product"
          className={({ isActive }) =>
            css({
              fontSize: "sm",
              color: "white",
              borderBottom: isActive ? "2px solid white" : "none",
              pb: "1",
            })
          }
        >
          Product
        </NavLink>

        {/* CONTACT */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            css({
              fontSize: "sm",
              color: "white",
              borderBottom: isActive ? "2px solid white" : "none",
              pb: "1",
            })
          }
        >
          Contact Us
        </NavLink>

        {/* MENU BUTTON */}
        <button
          className={css({
            bg: "white",
            color: "black",
            borderRadius: "full",
            w: "8",
            h: "8",
            display: "grid",
            placeItems: "center",
          })}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}