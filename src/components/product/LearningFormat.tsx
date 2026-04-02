import { css } from "../../../styled-system/css";
import learningImg from "../../../public/personcode2.jpg"
import learningImg1 from "../../../public/personcode1.jpg"

export default function LearningFormat() {
  return (
    <div
      className={css({
        bg: "#f5f7f6",
        p: { base: "6", md: "12" },
      })}
    >
      {/* HEADER */}
      <div
        className={css({
          textAlign: "center",
          mb: "10",
        })}
      >
        <h2
          className={css({
            fontSize: { base: "2xl", md: "3xl" },
            fontWeight: "bold",
            color: "#1f2937",
          })}
        >
          Learning Format
        </h2>
        <p
          className={css({
            color: "gray.500",
            maxW: "500px",
            mx: "auto",
            mt: "3",
            fontSize: "sm",
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* MAIN GRID */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "2fr 1fr" },
          gap: "6",
        })}
      >
        {/* LEFT SIDE */}
        <div className={css({ display: "flex", flexDirection: "column", gap: "6" })}>
          {/* IMAGE */}
          <div
            className={css({
              h: "200px",
              borderRadius: "xl",
              backgroundImage: `url(${learningImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            })}
          />
          <img src ={learningImg} />
          {/* STATS + IMAGE */}
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: { base: "1fr 1fr", md: "1fr 1fr 2fr" },
              gap: "4",
            })}
          >
            {/* CARD 1 */}
            <div
              className={css({
                bg: "#1f766e",
                color: "white",
                p: "4",
                borderRadius: "xl",
                textAlign: "center",
              })}
            >
              <h3 className={css({ fontSize: "xl", fontWeight: "bold" })}>45%</h3>
              <p className={css({ fontSize: "xs" })}>
                Lorem ipsum dolor sit amet
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className={css({
                bg: "#2c8f85",
                color: "white",
                p: "4",
                borderRadius: "xl",
                textAlign: "center",
              })}
            >
              <h3 className={css({ fontSize: "xl", fontWeight: "bold" })}>65%</h3>
              <p className={css({ fontSize: "xs" })}>
                Lorem ipsum dolor sit amet
              </p>
            </div>

            {/* IMAGE */}
            <img src={learningImg1 } />
            <div
              className={css({
                borderRadius: "xl",
                backgroundImage: `url(${learningImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minH: "120px",
              })}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "4",
            justifyContent: "center",
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
                px: "5",
                py: "3",
                borderRadius: "full",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "md",
              })}
            >
              <span className={css({ fontSize: "sm" })}>{item}</span>
              <div
                className={css({
                  w: "20px",
                  h: "20px",
                  bg: "white",
                  color: "#1f766e",
                  borderRadius: "full",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "xs",
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