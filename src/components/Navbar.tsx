import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

export default function Navbar() {
  return (
    <nav
      className={flex({
        justify: "space-between",
        align: "center",
        px: { base: "6", lg: "20" },
        py: "5",
        position: "relative",
        zIndex: 10,
      })}
    >
      {/* LOGO */}
      <div className={flex({ align: "center", gap: "2" })}>
        <div
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
          })}
        >
          ✦
        </div>

        <span
          className={css({
            textTransform: "uppercase",
            fontSize: "10px",
            letterSpacing: "0.2em",
            fontWeight: "bold",
          })}
        >
          Your Logo
        </span>
      </div>

      {/* DESKTOP MENU */}
      <div
        className={flex({
          gap: "8",
          align: "center",
          display: { base: "none", md: "flex" },
        })}
      >
        <a
          href="#"
          className={css({
            border: "1px solid currentColor",
            px: "4",
            py: "1",
            borderRadius: "999px",
            fontSize: "12px",
            textTransform: "capitalize",
            transition: "0.3s",
            _hover: {
              bg: "white",
              color: "black",
            },
          })}
        >
          Home
        </a>

        <a
          href="#"
          className={css({
            fontSize: "12px",
            transition: "0.3s",
            _hover: { opacity: 0.7 },
          })}
        >
          About Us
        </a>

        <a
          href="#"
          className={css({
            fontSize: "12px",
            transition: "0.3s",
            _hover: { opacity: 0.7 },
          })}
        >
          Product
        </a>

        <a
          href="#"
          className={css({
            fontSize: "12px",
            transition: "0.3s",
            _hover: { opacity: 0.7 },
          })}
        >
          Contact Us
        </a>

        {/* MENU BUTTON */}
        <button
          className={css({
            bg: "white",
            color: "black",
            borderRadius: "full",
            w: "9",
            h: "9",
            display: "grid",
            placeItems: "center",
            fontSize: "lg",
            transition: "0.3s",
            _hover: {
              transform: "scale(1.1)",
            },
          })}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className={css({
          display: { base: "grid", md: "none" },
          placeItems: "center",
          w: "9",
          h: "9",
          borderRadius: "full",
          bg: "white",
          color: "black",
        })}
      >
        ☰
      </button>
    </nav>
  );
}