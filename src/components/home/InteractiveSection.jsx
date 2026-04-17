import { css } from "../../styled-system/css";

const features = [
  {
    title: "Fast Performance",
    desc: "Experience lightning-fast speed and smooth interactions.",
  },
  {
    title: "Secure System",
    desc: "Your data is protected with top-level security.",
  },
  {
    title: "Smart Tracking",
    desc: "Track your progress anytime, anywhere.",
  },
];

export default function InteractiveSection() {
  return (
    <section
      className={css({
        py: "80px",
        px: "20px",
        bg: "gray.100",
      })}
    >
      {/* Title */}
      <div
        className={css({
          textAlign: "center",
          mb: "50px",
        })}
      >
        <h2
          className={css({
            fontSize: "32px",
            fontWeight: "bold",
          })}
        >
          Why Choose Us
        </h2>
        <p
          className={css({
            color: "gray.600",
            mt: "10px",
          })}
        >
          Discover what makes our platform unique
        </p>
      </div>

      {/* Cards */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: {
            base: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: "30px",
        })}
      >
        {features.map((item, index) => (
          <div
            key={index}
            className={css({
              bg: "white",
              p: "25px",
              borderRadius: "16px",
              boxShadow: "lg",
              transition: "all 0.3s ease",
              cursor: "pointer",

              _hover: {
                transform: "translateY(-10px) scale(1.03)",
                boxShadow: "xl",
                bg: "blue.50",
              },
            })}
          >
            <h3
              className={css({
                fontSize: "20px",
                fontWeight: "600",
                mb: "10px",
              })}
            >
              {item.title}
            </h3>
            <p
              className={css({
                color: "gray.600",
              })}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className={css({
          textAlign: "center",
          mt: "60px",
        })}
      >
        <button
          className={css({
            px: "30px",
            py: "12px",
            bg: "blue.500",
            color: "white",
            borderRadius: "999px",
            fontWeight: "600",
            transition: "all 0.3s",

            _hover: {
              bg: "blue.600",
              transform: "scale(1.05)",
            },
          })}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}