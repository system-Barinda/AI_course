import React, { useRef } from "react";
import { css } from "../../../styled-system/css";
import { grid, stack } from "../../../styled-system/patterns";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Register the plugin
gsap.registerPlugin(useGSAP);

const data = [
  { title: "Students Enrolled", value: "1,250", icon: "👨‍🎓" },
  { title: "Courses Available", value: "45", icon: "📚" },
  { title: "Completion Rate", value: "78%", icon: "✅" },
  { title: "Active Users", value: "320", icon: "🔥" },
];

export default function DataHighlightsDashboard() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Entrance Animation: Cards slide up and fade in
    gsap.from(".highlight-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    // 2. Title Animation
    gsap.from(".dashboard-title", {
      x: -20,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });
  }, { scope: container });

  // GSAP Hover Interaction handlers
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

  return (
    <div
      ref={container}
      className={stack({
        gap: "8",
        bg: 'linear-gradient(165deg, #01130f 60%, #0e4235 50%)',
        p: "12",
        align: "center",
        minH: "400px",
        color: "white"
      })}
    >
      <h2
        className={`${css({
          fontSize: "3xl",
          fontWeight: "bold",
          letterSpacing: "tight",
        })} dashboard-title`}
      >
        Data Highlights
      </h2>

      <div
        className={grid({
          columns: { base: 1, sm: 2, md: 4 },
          gap: "6",
          width: "100%",
          maxWidth: "1100px",
        })}
      >
        {data.map((item, index) => (
          <div
            key={index}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`highlight-card ${css({
              bg: "white/5", // Glassmorphism
              backdropFilter: "blur(8px)",
              border: "1px solid white/10",
              borderRadius: "2xl",
              p: "8",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            })}`}
          >
            <div className={css({ fontSize: "4xl", mb: "4" })}>
              {item.icon}
            </div>

            <h3 className={css({
              fontSize: "2xl",
              fontWeight: "bold",
              mb: "1"
            })}>
              {item.value}
            </h3>

            <p className={css({
              color: "white/50",
              fontSize: "xs",
              fontWeight: "medium",
              textTransform: "uppercase",
              letterSpacing: "widest"
            })}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}