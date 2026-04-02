import { css } from "../../../styled-system/css";
// import screen from '../../../public/screen.png' // Assuming this is your background

export default function HeroSection() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "1.1fr 0.9fr" }, // Adjusted ratio
        minH: "100vh",
        backgroundColor: "#022c22", // Deep fallback background
      })}
    >
      {/* LEFT SIDE */}
      <div
        className={css({
          bg: "radial-gradient(circle at top left, #115e59, #022c22)",
          color: "white",
          p: { base: "8", md: "16" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "8",
        })}
      >
        {/* LOGO */}
        <div className={css({ fontWeight: "600", fontSize: "lg", display: "flex", alignItems: "center", gap: "2" })}>
          <span className={css({ fontSize: "2xl" })}>✦</span> YOUR LOGO
        </div>

        {/* TITLE */}
        <h1
          className={css({
            fontSize: { base: "4xl", md: "6xl" },
            fontWeight: "700",
            lineHeight: "1.1",
            letterSpacing: "tight",
          })}
        >
          Empowering the <br /> AI Generation
        </h1>

        {/* DESCRIPTION */}
        <p
          className={css({
            color: "rgba(255,255,255,0.7)",
            maxW: "450px",
            fontSize: "md",
            lineHeight: "1.6",
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi.
        </p>

        {/* CONTENT BOX */}
        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", md: "row" },
            gap: "6",
            mt: "4",
          })}
        >
          {/* POINTS WITH TIMELINE */}
          <div
            className={css({
              bg: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              p: "6",
              borderRadius: "2xl",
              flex: "1.5",
              position: "relative",
            })}
          >
            <div className={css({ position: "relative", display: "flex", flexDirection: "column", gap: "6" })}>
              {/* Vertical Connector Line */}
              <div className={css({
                position: "absolute",
                left: "11px",
                top: "10px",
                bottom: "10px",
                width: "2px",
                bg: "rgba(255,255,255,0.2)"
              })} />

              {["Point A", "Point B", "Point C", "Point D"].map((item, i) => (
                <div key={i} className={css({ display: "flex", alignItems: "flex-start", gap: "4", zIndex: 1 })}>
                  <div
                    className={css({
                      w: "24px",
                      h: "24px",
                      bg: "white",
                      borderRadius: "full",
                      border: "6px solid rgba(255,255,255,0.2)",
                      flexShrink: 0,
                    })}
                  />
                  <div>
                    <p className={css({ fontWeight: "600", fontSize: "md" })}>{item}</p>
                    <p className={css({ fontSize: "xs", color: "rgba(255,255,255,0.6)" })}>
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div
            className={css({
              bg: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              p: "6",
              borderRadius: "2xl",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              minW: "160px",
            })}
          >
            <div>
              <h2 className={css({ fontSize: "4xl", fontWeight: "700" })}>35K</h2>
              <p className={css({ fontSize: "xs", fontWeight: "bold", letterSpacing: "widest", color: "rgba(255,255,255,0.5)", borderTop: "1px solid rgba(255,255,255,0.2)", pt: "1", mt: "1" })}>
                LOREM IPSUM
              </p>
            </div>

            <div>
              <h2 className={css({ fontSize: "4xl", fontWeight: "700" })}>90K</h2>
              <p className={css({ fontSize: "xs", fontWeight: "bold", letterSpacing: "widest", color: "rgba(255,255,255,0.5)", borderTop: "1px solid rgba(255,255,255,0.2)", pt: "1", mt: "1" })}>
                LOREM IPSUM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (IMAGE & NAV) */}
      <div
        className={css({
          position: "relative",
          // backgroundImage: `url(${screen})`, 
          bg: "#1e1e1e", // Dark placeholder for the tech image
          backgroundSize: "cover",
          backgroundPosition: "center",
        })}
      >
        {/* TOP NAVIGATION */}
        <nav className={css({
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          p: "8",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "8",
          color: "white",
          zIndex: 10,
        })}>
          <div className={css({ display: { base: "none", md: "flex" }, gap: "6", fontSize: "xs", fontWeight: "600", letterSpacing: "wider" })}>
            <a href="#" className={css({ opacity: 0.8, _hover: { opacity: 1 } })}>ABOUT US</a>
            <a href="#" className={css({ opacity: 0.8, _hover: { opacity: 1 } })}>PRODUCT</a>
            <a href="#" className={css({ opacity: 0.8, _hover: { opacity: 1 } })}>CONTACT US</a>
          </div>
          {/* Hamburger Icon */}
          <div className={css({ cursor: "pointer", p: "2", bg: "rgba(255,255,255,0.1)", borderRadius: "md" })}>
            <div className={css({ w: "20px", h: "2px", bg: "white", mb: "1" })} />
            <div className={css({ w: "20px", h: "2px", bg: "white", mb: "1" })} />
            <div className={css({ w: "20px", h: "2px", bg: "white" })} />
          </div>
        </nav>

        {/* Subtle Green Overlay to blend image with left side */}
        <div
          className={css({
            position: "absolute",
            inset: 0,
            bgGradient: "to-r",
            gradientFrom: "#022c22",
            gradientTo: "transparent",
            opacity: 0.4,
          })}
        />
      </div>
    </div>
  );
}