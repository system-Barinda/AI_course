import { css } from "../../../styled-system/css";
// import screen from '../../../public/screen.png' 

export default function HeroSection() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "1.1fr 0.9fr" },
        // CHANGE: Changed from 100vh to auto to minimize height
        minH: "auto", 
        backgroundColor: "#022c22",
        overflow: "hidden",
      })}
    >
      {/* LEFT SIDE */}
      <div
        className={css({
          bg: "radial-gradient(circle at top left, #115e59, #022c22)",
          color: "white",
          // CHANGE: Reduced padding from 16 to 10/12 to keep it tight
          p: { base: "8", md: "12" }, 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6",
        })}
      >
     
        <h1
          className={css({
            fontSize: { base: "3xl", md: "5xl" }, // Slightly smaller to save vertical space
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
            fontSize: "sm",
            lineHeight: "1.5",
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* CONTENT BOX */}
        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", lg: "row" },
            gap: "4",
            mt: "2",
          })}
        >
          {/* POINTS WITH TIMELINE */}
          <div
            className={css({
              bg: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              p: "5",
              borderRadius: "xl",
              flex: "1.5",
              position: "relative",
            })}
          >
            <div className={css({ position: "relative", display: "flex", flexDirection: "column", gap: "4" })}>
              <div className={css({
                position: "absolute",
                left: "9px",
                top: "8px",
                bottom: "8px",
                width: "2px",
                bg: "rgba(255,255,255,0.2)"
              })} />

              {["Point A", "Point B", "Point C", "Point D"].map((item, i) => (
                <div key={i} className={css({ display: "flex", alignItems: "flex-start", gap: "3", zIndex: 1 })}>
                  <div
                    className={css({
                      w: "20px",
                      h: "20px",
                      bg: "white",
                      borderRadius: "full",
                      border: "5px solid rgba(255,255,255,0.2)",
                      flexShrink: 0,
                    })}
                  />
                  <div>
                    <p className={css({ fontWeight: "600", fontSize: "sm" })}>{item}</p>
                    <p className={css({ fontSize: "10px", color: "rgba(255,255,255,0.6)" })}>
                      Lorem ipsum dolor sit amet.
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
              p: "5",
              borderRadius: "xl",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "4",
              minW: "140px",
            })}
          >
            <div>
              <h2 className={css({ fontSize: "3xl", fontWeight: "700" })}>35K</h2>
              <p className={css({ fontSize: "9px", fontWeight: "bold", letterSpacing: "wider", color: "rgba(255,255,255,0.5)" })}>
                LOREM IPSUM
              </p>
            </div>

            <div>
              <h2 className={css({ fontSize: "3xl", fontWeight: "700" })}>90K</h2>
              <p className={css({ fontSize: "9px", fontWeight: "bold", letterSpacing: "wider", color: "rgba(255,255,255,0.5)" })}>
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
          bg: "#1e1e1e", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          // CHANGE: Added minH here to ensure the image side is at least as tall as the content side
          minH: "100%",
        })}
      >

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