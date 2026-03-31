import { css } from "../../styled-system/css";

export default function Navbar() {
  return (
    <nav
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        color: "white",
      })}
    >
      <div className={css({ fontWeight: "bold", fontSize: "18px" })}>
        ✦ YOUR LOGO
      </div>

      <ul
        className={css({
          display: "flex",
          gap: "30px",
          listStyle: "none",
          alignItems: "center",
        })}
      >
        <li>ABOUT US</li>
        <li>PRODUCT</li>
        <li>CONTACT US</li>
        <li
          className={css({
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          ☰
        </li>
      </ul>
    </nav>
  );
}
