// DanceStudio.tsx

import { css } from "../../../styled-system/css";

const DanceStudio = () => {
  return (
    <div
      className={css({
        minH: "100vh",
        bg: "linear-gradient(135deg, #364d46 0%, #1a1a2e 100%)",
        position: "relative",
        overflowX: "hidden",
      })}
    >
      {/* Background Pattern */}
      <div
        className={css({
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        })}
      />


      {/* MAIN CONTENT */}
      <div
        className={css({
          maxW: "1400px",
          mx: "auto",
          px: "24px",
          pt: "140px",
        })}
      >
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          })}
        >
          {/* LEFT */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            })}
          >
            <p className={css({ color: "#ffd93d", fontWeight: "600" })}>
              AFROBEAT DANCE
            </p>

            <h1
              className={css({
                fontSize: "60px",
                lineHeight: "1.1",
                fontWeight: "bold",
              })}
            >
              AfeN Wahid
            </h1>

            <p
              className={css({
                color: "#aaa",
                maxW: "600px",
              })}
            >
              Discover rhythm, movement, and culture through dance. Join a
              community of passionate learners and grow your talent.
            </p>

            {/* STATS */}
            <div
              className={css({
                display: "flex",
                gap: "30px",
                alignItems: "center",
              })}
            >
              <div>
                <h2 className={css({ color: "#ffd93d", fontSize: "28px" })}>
                  300+
                </h2>
                <p className={css({ fontSize: "12px", color: "#777" })}>
                  Nights/show
                </p>
              </div>

              <div>
                <h2 className={css({ color: "#ffd93d", fontSize: "28px" })}>
                  120K+
                </h2>
                <p className={css({ fontSize: "12px", color: "#777" })}>
                  Students
                </p>
              </div>

              <button
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  _hover: { color: "#ffd93d" },
                })}
              >
                <div
                  className={css({
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#ffd93d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                  })}
                >
                  ▶
                </div>
                Watch
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
            })}
          >
            <div
              className={css({
                width: "300px",
                height: "300px",
                background: "linear-gradient(135deg, #ff6b6b, #ffd93d)",
                borderRadius: "50%",
                opacity: 0.7,
              })}
            />
          </div>
        </div>

        {/* FOOTER */}
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "80px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          })}
        >
          <p className={css({ fontWeight: "bold" })}>DANCE STUDIO</p>

          <div className={css({ display: "flex", gap: "20px" })}>
            {["Instagram", "Twitter", "YouTube"].map((s) => (
              <span
                key={s}
                className={css({
                  cursor: "pointer",
                  _hover: { color: "#ffd93d" },
                })}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanceStudio;