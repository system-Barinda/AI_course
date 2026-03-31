import { css } from "../styled-system/css";

export default function HeroText() {
  return (
    <div>
      <h1
        className={css({
          fontSize: "48px",
          fontWeight: "bold",
        })}
      >
        AI COURSE
      </h1>

      <p
        className={css({
          marginTop: "10px",
          fontSize: "20px",
          color: "#94a3b8",
        })}
      >
        Learning Program
      </p>

      <div
        className={css({
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        })}
      >
        <button
          className={css({
            padding: "10px 20px",
            borderRadius: "20px",
            background: "#10b981",
            color: "white",
          })}
        >
          AI Presentation
        </button>

        <button
          className={css({
            padding: "10px 20px",
            borderRadius: "20px",
            background: "transparent",
            border: "1px solid white",
            color: "white",
          })}
        >
          Introduction
        </button>
      </div>
    </div>
  );
}