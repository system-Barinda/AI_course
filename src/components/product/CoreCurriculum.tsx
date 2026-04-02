import { css } from "../../../styled-system/css";

export default function CoreCurriculum() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
        minH: "60vh", 
      })}
    >
      {/* LEFT SIDE */}
      <div
        className={css({
          bg: "#f5f7f6",
          p: { base: "5", md: "10" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5",
        })}
      >
        {/* TITLE */}
        <h2
          className={css({
            fontSize: { base: "xl", md: "2xl" },
            fontWeight: "bold",
            color: "#1f2937",
          })}
        >
          Core Curriculum
        </h2>

        {/* DESCRIPTION */}
        <p
          className={css({
            fontSize: "sm",
            color: "gray.500",
            maxW: "400px",
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* VIDEO CARD */}
        <div
          className={css({
            position: "relative",
            borderRadius: "xl",
            overflow: "hidden",
            h: "160px",
            backgroundImage: "url('/personcode1.jpg')", // ✅ use public path
            backgroundSize: "cover",
            backgroundPosition: "center",
          })}
        >
          {/* overlay */}
          <div
            className={css({
              position: "absolute",
              inset: 0,
              bg: "rgba(0,0,0,0.4)",
            })}
          />

          {/* bottom info */}
          <div
            className={css({
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              p: "3",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              fontSize: "sm",
            })}
          >
            <span>Your Data</span>
            <span
              className={css({
                bg: "#1f766e",
                px: "3",
                py: "1",
                borderRadius: "full",
                fontWeight: "bold",
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
          bg: "linear-gradient(135deg, #134e4a, #0f766e)",
          p: { base: "5", md: "10" },
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4",
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
              bg: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "lg",
              p: "4",
              color: "white",
              position: "relative",
              minH: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            })}
          >
            {/* NUMBER */}
            <span
              className={css({
                fontSize: "lg",
                fontWeight: "bold",
                opacity: 0.8,
              })}
            >
              {item.num}
            </span>

            {/* TITLE */}
            <h3 className={css({ fontSize: "sm", fontWeight: "bold" })}>
              {item.title}
            </h3>

            {/* TEXT */}
            <p className={css({ fontSize: "xs", opacity: 0.7 })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* ICON */}
            <div
              className={css({
                position: "absolute",
                top: "10px",
                right: "10px",
                w: "18px",
                h: "18px",
                borderRadius: "full",
                bg: "white",
                color: "#134e4a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
              })}
            >
              +
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}