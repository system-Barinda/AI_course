import { css } from "../../../styled-system/css";

export default function HeroSectionHome() {
  return (
    <section
      className={css({
        minH: "100vh",
        bg: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: "40px",
      })}
    >
      <div
        className={css({
          maxW: "1200px",
          w: "100%",
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
          gap: "40px",
          alignItems: "center",
        })}
      >
        {/* LEFT CONTENT */}
        <div>
          {/* Navbar */}
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "40px",
            })}
          >
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "10px",
              })}
            >
              <div
                className={css({
                  w: "10px",
                  h: "10px",
                  bg: "green.400",
                  borderRadius: "full",
                })}
              />
              <span>Next Scale</span>
            </div>

            <button
              className={css({
                px: "20px",
                py: "8px",
                bg: "green.400",
                color: "black",
                borderRadius: "full",
                fontWeight: "600",
                _hover: { bg: "green.500" },
              })}
            >
              Contact Us
            </button>
          </div>

          {/* Heading */}
          <h1
            className={css({
              fontSize: { base: "32px", md: "48px" },
              fontWeight: "bold",
              lineHeight: "1.2",
            })}
          >
            Grow Your <br />
            Business With{" "}
            <span
              className={css({
                color: "green.400",
              })}
            >
              Strategy
            </span>
          </h1>

          {/* Description */}
          <p
            className={css({
              mt: "20px",
              color: "gray.400",
              maxW: "400px",
            })}
          >
            We help brands transform ideas into profitable business through
            strategic planning.
          </p>

          {/* Buttons */}
          <div
            className={css({
              mt: "30px",
              display: "flex",
              gap: "15px",
            })}
          >
            <button
              className={css({
                px: "20px",
                py: "10px",
                bg: "gray.800",
                borderRadius: "full",
                _hover: { bg: "gray.700" },
              })}
            >
              Get Started
            </button>

            <button
              className={css({
                px: "20px",
                py: "10px",
                bg: "green.400",
                color: "black",
                borderRadius: "full",
                fontWeight: "600",
                _hover: { bg: "green.500" },
              })}
            >
              Learn More
            </button>
          </div>

          {/* Members */}
          <div
            className={css({
              mt: "40px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            })}
          >
            <div
              className={css({
                display: "flex",
              })}
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={css({
                    w: "35px",
                    h: "35px",
                    bg: "gray.600",
                    borderRadius: "full",
                    border: "2px solid black",
                    ml: i !== 1 ? "-10px" : "0",
                  })}
                />
              ))}
            </div>

            <div>
              <h3
                className={css({
                  color: "green.400",
                  fontWeight: "bold",
                })}
              >
                18K+
              </h3>
              <p
                className={css({
                  fontSize: "12px",
                  color: "gray.400",
                })}
              >
                Our Member
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={css({
            position: "relative",
            display: "flex",
            justifyContent: "center",
          })}
        >
          {/* Background Glow */}
          <div
            className={css({
              position: "absolute",
              w: "100%",
              h: "100%",
              bg: "green.500",
              filter: "blur(120px)",
              opacity: 0.3,
              borderRadius: "50%",
            })}
          />

          {/* Image */}
          <img
            src="/hero-person.png" // replace with your image
            alt="person"
            className={css({
              position: "relative",
              zIndex: 2,
              maxH: "500px",
            })}
          />

          {/* Floating Card */}
          <div
            className={css({
              position: "absolute",
              bottom: "20px",
              bg: "green.400",
              color: "black",
              px: "20px",
              py: "15px",
              borderRadius: "16px",
              fontSize: "14px",
              zIndex: 3,
              display: "flex",
              gap: "20px",
            })}
          >
            <div>
              <strong>Manufacturer</strong>
              <p>Industrial Strategy</p>
            </div>
            <div>
              <strong>Agency Partner</strong>
              <p>Production Market</p>
            </div>
          </div>

          {/* Badge */}
          <div
            className={css({
              position: "absolute",
              top: "20px",
              right: "20px",
              bg: "gray.900",
              px: "15px",
              py: "10px",
              borderRadius: "12px",
              fontSize: "14px",
              zIndex: 3,
            })}
          >
            <span
              className={css({
                color: "green.400",
                fontWeight: "bold",
              })}
            >
              82+
            </span>{" "}
            New Service
          </div>
        </div>
      </div>
    </section>
  );
}