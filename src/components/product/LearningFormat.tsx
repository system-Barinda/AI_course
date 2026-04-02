import { css } from "../../../styled-system/css";

export default function LearningFormat() {
  return (
    <div
      className={css({
        bg: "#f5f7f6",
        p: { base: "8", md: "12" }, // reduced padding
      })}
    >
      {/* HEADER */}
      <div
        className={css({
          textAlign: "center",
          mb: "6", // reduced space
        })}
      >
        <h2
          className={css({
            fontSize: { base: "xl", md: "2xl" }, // smaller
            fontWeight: "bold",
            color: "#1f2937",
          })}
        >
          Learning Format
        </h2>

        <p
          className={css({
            color: "gray.500",
            maxW: "400px",
            mx: "auto",
            mt: "2",
            fontSize: "xs",
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* MAIN GRID */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "2fr 1fr" },
          gap: "4",
          alignItems: "center",
        })}
      >
        {/* LEFT SIDE */}
        <div className={css({ display: "flex", flexDirection: "column", gap: "4" })}>
          
          {/* TOP IMAGE */}
          <div
            className={css({
              h: "300px", // reduced height
              borderRadius: "lg",
              backgroundImage: "url('/personcode2.jpg')", // ✅ FIXED
              backgroundSize: "cover",
              backgroundPosition: "center",
            })}
          />

          {/* STATS + IMAGE */}
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "3",
            })}
          >
            {/* CARD 1 */}
            <div
              className={css({
                bg: "#1f766e",
                color: "white",
                p: "3",
                borderRadius: "lg",
                textAlign: "center",
              })}
            >
              <h3 className={css({ fontSize: "md", fontWeight: "bold" })}>
                45%
              </h3>
            </div>

            {/* CARD 2 */}
            <div
              className={css({
                bg: "#2c8f85",
                color: "white",
                p: "3",
                borderRadius: "lg",
                textAlign: "center",
              })}
            >
              <h3 className={css({ fontSize: "md", fontWeight: "bold" })}>
                65%
              </h3>
            </div>

            {/* SMALL IMAGE */}
            <div
              className={css({
                borderRadius: "lg",
                backgroundImage: "url('/personcode1.jpg')", // ✅ FIXED
                backgroundSize: "cover",
                backgroundPosition: "center",
                h: "200px",
              })}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "3",
          })}
        >
          {[
            "Project Schedule",
            "Project Guidance",
            "Project Structure",
            "Project Tools",
          ].map((item, i) => (
            <div
              key={i}
              className={css({
                bg: "#1f766e",
                color: "white",
                px: "4",
                py: "2",
                borderRadius: "full",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "xs",
              })}
            >
              <span>{item}</span>

              <div
                className={css({
                  w: "26px",
                  h: "26px",
                  bg: "white",
                  color: "#1f766e",
                  borderRadius: "full",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                })}
              >
                ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}