import { css } from "../../../styled-system/css";

export default function CoreCurriculum() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "1.2fr 1fr" }, // Adjusted Ratio
        minH: "70vh", // Increased min height
      })}
    >
      {/* LEFT SIDE */}
      <div
        className={css({
          bg: "#f3f4f6", // Updated background color
          p: { base: "6", md: "12" }, // Increased padding
          display: "flex",
          flexDirection: "column",
          gap: "8",
        })}
      >
       

        {/* TITLE */}
        <h2
          className={css({
            fontSize: { base: "4xl", md: "5xl" }, // Increased size
            fontWeight: "700",
            color: "#374151",
            letterSpacing: "tight",
          })}
        >
          Core Curriculum
        </h2>

        {/* DESCRIPTION */}
        <p
          className={css({
            fontSize: "md", // Increased size
            color: "#6b7280",
            maxW: "480px",
            lineHeight: "1.6",
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        {/* VIDEO CARD */}
        <div
          className={css({
            position: "relative",
            borderRadius: "2xl", 
            overflow: "hidden",
            h: "200px", 
            backgroundImage: "url('/behindgirl2.jpg')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
          })}
        >
          {/* overlay */}
          <div
            className={css({
              position: "absolute",
              inset: 0,
              bg: "rgba(0,0,0,0.5)", // Darker overlay
            })}
           />

          {/* bottom info */}
          <div
            className={css({
              position: "absolute",
              bottom: "4", // Adjust position
              left: "4",
              right: "4",
              p: "4",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              fontSize: "md",
              bgGradient: "to-r",
              gradientFrom: "#115e59", // Teal to Green gradient
              gradientTo: "#064e3b",
              borderRadius: "xl",
            })}
          >
            <div>
              <p className={css({ fontWeight: "600" })}>Your Data</p>
              <p className={css({ fontSize: "xs", color: "rgba(255,255,255,0.7)" })}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <span
              className={css({
                fontSize: "2xl",
                fontWeight: "700",
              })}
            >
              $43,908
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className={css({
          bgGradient: "to-br",
          gradientFrom: "#064e3b", // Dark Green to Teal gradient
          gradientTo: "#115e59",
          p: { base: "6", md: "12" },
          position: "relative",
        })}
      >

        {/* GRID OF CARDS */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6",
            mt: "24", // Adjust top margin
          })}
        >
          {[
            { num: "01", title: "Start coding" },
            { num: "02", title: "AI models" },
            { num: "03", title: "Data handling" },
            { num: "04", title: "Deployment" },
          ].map((item, i) => (
            <div
              key={i}
              className={css({
                bg: "rgba(255,255,255,0.06)", // Adjust transparency
                backdropFilter: "blur(12px)", // Adjust blur
                borderRadius: "xl", // Increased radius
                border: "1px solid rgba(255,255,255,0.08)", // Add border
                p: "6", // Increased padding
                color: "white",
                position: "relative",
                minH: "160px", // Increased min height
                display: "flex",
                flexDirection: "column",
                gap: "3",
              })}
            >
              {/* NUMBER */}
              <span
                className={css({
                  fontSize: "3xl", // Increased size
                  fontWeight: "700",
                  opacity: 0.9,
                })}
              >
                {item.num}
              </span>

              {/* TITLE */}
              <h3 className={css({ fontSize: "md", fontWeight: "700" })}>
                {item.title}
              </h3>

              {/* TEXT */}
              <p className={css({ fontSize: "xs", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" })}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>

              {/* ICON */}
              <div
                className={css({
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  w: "24px",
                  h: "24px",
                  borderRadius: "full",
                  bg: "rgba(255,255,255,0.1)", // Transparent background
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                })}
              >
                +
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}