import React from "react";
import { css } from "../../../styled-system/css";
import { grid, stack } from "../../../styled-system/patterns";

const data = [
  { title: "Students Enrolled", value: "1,250", icon: "👨‍🎓" },
  { title: "Courses Available", value: "45", icon: "📚" },
  { title: "Completion Rate", value: "78%", icon: "✅" },
  { title: "Active Users", value: "320", icon: "🔥" },
];

export default function DataHighlightsDashboard() {
  return (
    <div
      className={stack({
        gap: "6",
        bg: 'linear-gradient(165deg, #01130f 60%, #0e4235 50%)',
        p: "6",
        align: "center",
      })}
    >
      <h2
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
        })}
      >
        Data Highlights
      </h2>

      <div
        className={grid({
          columns: { base: 1, sm: 2, md: 4 },
          gap: "6",
          width: "100%",
        })}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={css({
              bg: "white",
              borderRadius: "xl",
              p: "6",
              textAlign: "center",
              boxShadow: "md",
              transition: "all 0.3s ease",
              _hover: {
                transform: "translateY(-5px)",
                boxShadow: "lg",
              },
            })}
          >
            <div
              className={css({
                fontSize: "3xl",
                mb: "2",
              })}
            >
              {item.icon}
            </div>

            <h3
              className={css({
                fontSize: "xl",
                fontWeight: "semibold",
              })}
            >
              {item.value}
            </h3>

            <p
              className={css({
                color: "gray.500",
                fontSize: "sm",
              })}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}