import { css } from "../../../styled-system/css";

export default function WorldDemands() {
  return (
    <div
      className={css({
        bg: "#f3f4f6", // Light gray background
        backgroundImage: "radial-gradient(circle at top left, rgba(209, 213, 219, 0.4), transparent)",
        p: { base: "6", md: "12" },
        minH: "auto",
        fontFamily: "sans-serif",
      })}
    >
    

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", lg: "1.1fr 0.9fr" },
          gap: "10",
          alignItems: "start",
        })}
      >
        {/* LEFT SIDE */}
        <div className={css({ display: "flex", flexDirection: "column", gap: "6" })}>
          <h2
            className={css({
              fontSize: { base: "3xl", md: "5xl" },
              fontWeight: "700",
              color: "#374151",
              lineHeight: "1.1",
            })}
          >
            Learn What the <br /> World Demands
          </h2>

          <p
            className={css({
              fontSize: "sm",
              color: "#6b7280",
              maxW: "480px",
              lineHeight: "1.6",
            })}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          {/* MAIN VIDEO/IMAGE AREA */}
          <div
            className={css({
              borderRadius: "2xl",
              overflow: "hidden",
              h: "240px",
              backgroundImage: "url('/personcode2.jpg')", 
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              position: "relative",
            })}
          >
             {/* Simple Overlay Placeholder for the inner UI shown in image */}
             <div className={css({
               position: "absolute",
               bottom: "15%",
               left: "5%",
               right: "5%",
               h: "30px",
               bg: "rgba(255,255,255,0.1)",
               backdropFilter: "blur(4px)",
               borderRadius: "full",
               border: "1px solid rgba(255,255,255,0.2)"
             })} />
          </div>
        </div>

        {/* RIGHT SIDE GRID */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5",
          })}
        >
          {/* TOP TWO CARDS */}
          {["Subheadline", "Subheadline"].map((item, i) => (
            <div
              key={i}
              className={css({
                bgGradient: "to-br",
                gradientFrom: "#115e59",
                gradientTo: "#064e3b",
                color: "white",
                borderRadius: "2xl",
                p: "6",
                display: "flex",
                flexDirection: "column",
                gap: "3",
                minH: "160px",
                boxShadow: "md",
              })}
            >
              <h3 className={css({ fontSize: "md", fontWeight: "600" })}>{item}</h3>
              <p className={css({ fontSize: "xs", color: "rgba(255,255,255,0.7)", lineHeight: "1.5" })}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <button
                className={css({
                  mt: "auto",
                  alignSelf: "flex-start",
                  bg: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "full",
                  px: "4",
                  py: "1.5",
                  fontSize: "xs",
                  fontWeight: "500",
                  cursor: "pointer",
                  _hover: { bg: "rgba(255,255,255,0.25)" }
                })}
              >
                Learn More
              </button>
            </div>
          ))}

          {/* BOTTOM WIDE STATS PANEL */}
          <div
            className={css({
              gridColumn: "span 2",
              bgGradient: "to-r",
              gradientFrom: "#115e59",
              gradientTo: "#064e3b",
              color: "white",
              borderRadius: "2xl",
              p: "8",
              display: "grid",
              gridTemplateColumns: "0.8fr 2fr",
              gap: "8",
              alignItems: "center",
              boxShadow: "md",
            })}
          >
            {/* LARGE PERCENTAGES */}
            <div className={css({ display: "flex", flexDirection: "column", gap: "4" })}>
              <div className={css({ fontSize: "4xl", fontWeight: "300" })}>10%</div>
              <div className={css({ fontSize: "4xl", fontWeight: "300" })}>34%</div>
            </div>

            {/* DESCRIPTION TEXT */}
            <div className={css({ display: "flex", flexDirection: "column", gap: "6" })}>
              <div>
                <h4 className={css({ fontSize: "sm", fontWeight: "700", mb: "1" })}>Lorem Ipsum Dolor</h4>
                <p className={css({ fontSize: "xs", color: "rgba(255,255,255,0.7)" })}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div>
                <h4 className={css({ fontSize: "sm", fontWeight: "700", mb: "1" })}>Lorem Ipsum Dolor</h4>
                <p className={css({ fontSize: "xs", color: "rgba(255,255,255,0.7)" })}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}