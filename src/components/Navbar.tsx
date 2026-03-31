import { css } from "../../styled-system/css";

export default function Navbar() {
  return (
    <nav
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        color: "white",
      })}
    >
      <div className={css({ fontWeight: "bold" })}>YOUR LOGO</div>

      <ul
        className={css({
          display: "flex",
          gap: "20px",
          listStyle: "none",
        })}
      >
        <li>About Us</li>
        <li>Product</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}