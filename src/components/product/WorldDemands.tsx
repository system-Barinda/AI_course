import { css } from "../../../styled-system/css";

export default function WorldDemands() {
  return (
    <div
      className={css({
        bg: "#f5f7f6",
        p: { base: "4", md: "8" },
      })}
    >
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
          gap: "5",
          alignItems: "center",
        })}
      >
        {/* LEFT SIDE */}
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "4",
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
            Learn What the <br /> World Demands
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
            eiusmod tempor incididunt ut labore.
          </p>

          {/* VIDEO / IMAGE */}
          <div
            className={css({
              borderRadius: "lg",
              overflow: "hidden",
              h: "140px",
              backgroundImage: "url('/personcode2.jpg')", // ✅ public image
              backgroundSize: "cover",
              backgroundPosition: "center",
            })}
          />
        </div>

        {/* RIGHT SIDE */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4",
          })}
        >
          {/* TOP CARDS */}
          {["Subheading", "Subheading"].map((item, i) => (
            <div
              key={i}
              className={css({
                bg: "linear-gradient(135deg, #134e4a, #0f766e)",
                color: "white",
                borderRadius: "lg",
                p: "4",
                display: "flex",
                flexDirection: "column",
                gap: "2",
                minH: "100px",
              })}
            >
              <h3 className={css({ fontSize: "sm", fontWeight: "bold" })}>
                {item}
              </h3>

              <p className={css({ fontSize: "xs", opacity: 0.8 })}>
                Lorem ipsum dolor sit amet consectetur.
              </p>

              <button
                className={css({
                  mt: "auto",
                  bg: "rgba(255,255,255,0.2)",
                  borderRadius: "full",
                  px: "3",
                  py: "1",
                  fontSize: "xs",
                })}
              >
                Learn More
              </button>
            </div>
          ))}

          {/* BOTTOM STATS PANEL */}
          <div
            className={css({
              gridColumn: "span 2",
              bg: "linear-gradient(135deg, #134e4a, #0f766e)",
              color: "white",
              borderRadius: "lg",
              p: "4",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "4",
              alignItems: "center",
            })}
          >
            {/* LEFT NUMBERS */}
            <div>
              <h3 className={css({ fontSize: "lg", fontWeight: "bold" })}>
                10%
              </h3>
              <h3 className={css({ fontSize: "lg", fontWeight: "bold", mt: "2" })}>
                34%
              </h3>
            </div>

            {/* RIGHT TEXT */}
            <div className={css({ fontSize: "xs", opacity: 0.9 })}>
              <p>
                <strong>Lorem Ipsum Dolor</strong>
                <br />
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>

              <p className={css({ mt: "2" })}>
                <strong>Lorem Ipsum Dolor</strong>
                <br />
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}