import { css } from "../../styled-system/css";
            marginTop: "10px",
            color: "#cbd5f5",
          })}
        >
          Learning Program
        </p>

        {/* BUTTONS */}
        <div
          className={css({
            display: "flex",
            gap: "15px",
            marginTop: "25px",
          })}
        >
          <button
            className={css({
              padding: "12px 25px",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
            })}
          >
            Artificial Intelligence Presentation
          </button>

          <button
            className={css({
              padding: "12px 25px",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
            })}
          >
            Introduction
          </button>
        </div>

        {/* CARD */}
        <div
          className={css({
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "15px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
          })}
        >
          <img
            src="/hero.png"
            className={css({ width: "60px", borderRadius: "10px" })}
          />
          <p className={css({ fontSize: "14px" })}>
            Discover the goals, structure, and long-term benefits
          </p>
        </div>
      </div>
    </section>
  );
}