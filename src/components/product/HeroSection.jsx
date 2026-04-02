import { css } from "../../../styled-system/css";
import screen from '../../../public/screen.png'

export default function HeroSection() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
        minH: "100vh",
        overflow: "hidden",
      })}
    >
      {/* LEFT SIDE */}
      <div
        className={css({
          bg: "linear-gradient(135deg, #0f766e, #134e4a)",
          color: "white",
          p: { base: "6", md: "12" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6",
        })}
      >
        {/* LOGO */}
        <div className={css({ fontWeight: "bold", fontSize: "lg" })}>
          ✦ YOUR LOGO
        </div>

        {/* TITLE */}
        <h1
          className={css({
            fontSize: { base: "2xl", md: "4xl" },
            fontWeight: "bold",
            lineHeight: "1.2",
          })}
        >
          Empowering the <br /> AI Generation
        </h1>

        {/* DESCRIPTION */}
        <p
          className={css({
            color: "gray.300",
            maxW: "400px",
            fontSize: "sm",
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* CONTENT BOX */}
        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", md: "row" },
            gap: "4",
          })}
        >
          {/* POINTS */}
          <div
            className={css({
              bg: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              p: "4",
              borderRadius: "lg",
              flex: "1",
            })}
          >
            {["Point A", "Point B", "Point C", "Point D"].map((item, i) => (
              <div
                key={i}
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "3",
                  mb: "3",
                })}
              >
                <div
                  className={css({
                    w: "10px",
                    h: "10px",
                    bg: "white",
                    borderRadius: "full",
                  })}
                />
                <div>
                  <p className={css({ fontWeight: "medium" })}>{item}</p>
                  <p className={css({ fontSize: "xs", color: "gray.300" })}>
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div
            className={css({
              bg: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              p: "4",
              borderRadius: "lg",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "4",
              minW: "120px",
            })}
          >
            <div>
              <h2 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
                35K
              </h2>
              <p className={css({ fontSize: "xs" })}>LOREM IPSUM</p>
            </div>

            <div>
              <h2 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
                90K
              </h2>
              <p className={css({ fontSize: "xs" })}>LOREM IPSUM</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div
        className={css({
          position: "relative",
          minH: { base: "300px", md: "auto" },
          backgroundImage: `url(${screen})`, // replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        })}
      >
        {/* overlay effect */}
        <div
          className={css({
            position: "absolute",
            inset: 0,
            bg: "rgba(0,0,0,0.3)",
          })}
        />
      </div>
    </div>
  );
}