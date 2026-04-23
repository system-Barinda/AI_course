import { css } from "../../../styled-system/css";
import { flex, grid, stack, container } from "../../../styled-system/patterns";

export default function HeroSectionHome() {
  return (
    <section
      className={css({
        minH: "100vh",
         bg: 'linear-gradient(165deg, #01130f 60%, #0e4235 50%)',
        color: "white",
        px: { base: "20px", md: "40px", lg: "80px" },
        pt: { base: "16px", lg: "24px" },
        pb: "60px",
        overflowX: "hidden",
        fontFamily: "Inter, sans-serif",
      })}
    >
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className={flex({ 
        justify: "space-between", 
        align: "center", 
        mb: { base: "40px", lg: "60px" },
        direction: { base: "row", sm: "row" } 
      })}>
        <div
          className={css({
            bg: "#141414",
            borderRadius: "full",
            pl: { base: "8px", md: "12px" },
            pr: { base: "4px", md: "8px" },
            py: "6px",
            display: "flex",
            alignItems: "center",
            gap: { base: "8px", md: "16px" },
            border: "1px solid rgba(255, 255, 255, 0.05)",
          })}
        >
          {/* Logo */}
          <div className={flex({ align: "center", gap: "8px", hideBelow: "sm" })}>
            <div className={css({ 
              w: "24px", h: "24px", 
              border: "4px solid #00E699", 
              borderRadius: "full",
              boxShadow: "0 0 10px rgba(0, 230, 153, 0.3)"
            })} />
            <span className={css({ fontWeight: "600", fontSize: "14px", color: "#E0E0E0" })}>Next Scale</span>
          </div>

          {/* Navigation Pills */}
          <div className={flex({ gap: "4px" })}>
            <div className={css({ 
              bg: "white", color: "black", px: { base: "12px", md: "18px" }, py: "8px", 
              borderRadius: "full", fontSize: "13px", fontWeight: "600", 
              display: "flex", alignItems: "center", gap: "6px" 
            })}>
               <span className={css({ fontSize: "16px" })}>⌂</span> Home
            </div>
            {/* Icons hidden on very small screens to prevent overlap */}
            <div className={css({ bg: "rgba(255,255,255,0.08)", p: "8px", borderRadius: "full", fontSize: "13px", cursor: "pointer", hideBelow: "xs" })}>ⓘ</div>
            <div className={css({ bg: "rgba(255,255,255,0.08)", p: "8px", borderRadius: "full", fontSize: "13px", cursor: "pointer" })}>❐</div>
            <div className={css({ bg: "rgba(255,255,255,0.08)", p: "8px", borderRadius: "full", fontSize: "13px", cursor: "pointer" })}>☰</div>
          </div>
        </div>

        <button className={css({ 
          bg: "#00E699", color: "black", px: { base: "16px", md: "28px" }, py: "10px", 
          borderRadius: "full", fontWeight: "bold", fontSize: { base: "12px", md: "14px" },
          transition: "all 0.3s", _hover: { transform: "translateY(-2px)", bg: "#00ffaa" }
        })}>
          Contact Us
        </button>
      </nav>

      <div className={grid({ 
        columns: { base: 1, lg: 2 }, 
        gap: { base: "60px", lg: "40px" }, 
        alignItems: "center" 
      })}>
        
        {/* --- LEFT SIDE: Typography --- */}
        <div className={stack({ gap: { base: "20px", lg: "32px" }, textAlign: { base: "center", lg: "left" }, alignItems: { base: "center", lg: "flex-start" } })}>
          <h1 className={css({ 
            fontSize: { base: "42px", md: "64px", lg: "84px", xl: "92px" }, 
            fontWeight: "600", 
            lineHeight: "1", 
            letterSpacing: "-0.04em",
            maxW: { base: "100%", lg: "none" }
          })}>
            Grow Your <br />
            Business With <br />
            <span className={css({ color: "#00E699" })}>Strategy</span>
          </h1>

          <p className={css({ color: "#999", maxW: "420px", fontSize: { base: "16px", lg: "18px" }, lineHeight: "1.6" })}>
            We help brands transform ideas into profitable business through strategic planning.
          </p>

          <div className={flex({ gap: "12px", pt: "8px" })}>
            <button className={css({ bg: "#141414", color: "white", px: "28px", py: "14px", borderRadius: "16px", fontWeight: "600", border: "1px solid #222", cursor: "pointer" })}>Get Started</button>
            <button className={css({ bg: "#00E699", color: "black", px: "28px", py: "14px", borderRadius: "16px", fontWeight: "700", cursor: "pointer" })}>Learn More</button>
          </div>

          {/* Member Stats */}
          <div className={flex({ align: "center", gap: "16px", pt: { base: "10px", lg: "20px" } })}>
            <div className={flex({ align: "center" })}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={css({ 
                  w: { base: "40px", lg: "48px" }, h: { base: "40px", lg: "48px" }, 
                  borderRadius: "full", border: "3px solid black", 
                  ml: i === 1 ? "0" : "-14px", overflow: "hidden", bg: "#222" 
                })}>
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className={css({ w: "100%", h: "100%", objectFit: "cover" })} />
                </div>
              ))}
            </div>
            <div className={css({ textAlign: "left" })}>
              <div className={css({ fontSize: "24px", fontWeight: "700", color: "white", lineHeight: "1" })}>18K+</div>
              <div className={css({ fontSize: "13px", color: "#666" })}>Our Member</div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Visual Component --- */}
        <div className={css({ 
          position: "relative", 
          width: "100%", 
          height: { base: "450px", md: "550px", lg: "600px" }, 
          display: "flex", 
          alignItems: "flex-end" 
        })}>
          
          {/* Scalloped Background Box */}
          <div className={css({
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "100%",
            height: "90%",
            background: "linear-gradient(180deg, #001A11 0%, #003322 100%)",
            borderRadius: "32px",
            // Adjusted clipPath for better mobile scaling
            clipPath: { 
                base: "polygon(0% 10%, 20% 10%, 20% 0%, 80% 0%, 80% 10%, 100% 10%, 100% 100%, 0% 100%)",
                lg: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 100%, 0% 100%)"
            },
            overflow: "hidden"
          })}>
             <div className={css({
               width: "200%", height: "200%",
               opacity: 0.25,
               backgroundImage: "radial-gradient(circle at center, #00E699 0%, transparent 60%)",
               filter: "blur(60px)",
             })} />
          </div>

          {/* Floating Badge (82+) */}
          <div className={css({
            position: "absolute",
            top: "5%",
            right: { base: "10px", lg: "0" },
            bg: "rgba(10, 10, 10, 0.95)",
            p: { base: "12px 16px", lg: "20px" },
            borderRadius: "20px",
            zIndex: 10,
            border: "1px solid #222",
            backdropFilter: "blur(10px)"
          })}>
            <span className={css({ color: "#00E699", fontSize: { base: "20px", lg: "28px" }, fontWeight: "700", display: "block", lineHeight: "1" })}>82+</span>
            <span className={css({ fontSize: "11px", color: "#888", fontWeight: "500", whiteSpace: "nowrap" })}>New Service <br/> on here</span>
          </div>

          {/* The Person */}
          <img 
            src="/person.jpg" 
            alt="Business Woman"
            className={css({
              position: "relative",
              zIndex: 5,
              height: "95%",
              width: "auto",
              objectFit: "contain",
              margin: "0 auto",
            })}
          />

          {/* Bottom Data Pill - Responsive Gap and Padding */}
          <div className={css({
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            bg: "#00E699",
            color: "black",
            py: { base: "12px", lg: "18px" },
            px: { base: "20px", lg: "36px" },
            borderRadius: "24px",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            gap: { base: "15px", lg: "30px" },
            boxShadow: "0 20px 50px rgba(0, 230, 153, 0.2)",
            width: { base: "90%", sm: "auto" },
            justifyContent: "center"
          })}>
            <div className={stack({ gap: "0" })}>
              <span className={css({ fontWeight: "700", fontSize: { base: "12px", lg: "14px" } })}>Manufacturer</span>
              <span className={css({ fontSize: "11px", opacity: 0.8 })}>Industrial Strategy</span>
            </div>
            <div className={css({ w: "1px", h: "24px", bg: "black", opacity: 0.15 })} />
            <div className={stack({ gap: "0" })}>
              <span className={css({ fontWeight: "700", fontSize: { base: "12px", lg: "14px" } })}>Agency Partner</span>
              <span className={css({ fontSize: "11px", opacity: 0.8 })}>Production Market</span>
            </div>
          </div>

          {/* Scroll Icon - Hidden on smaller screens to clean up UI */}
          <div className={css({
            position: "absolute",
            bottom: "100px",
            right: "20px",
            bg: "#00E699",
            w: "40px", h: "40px",
            display: { base: "none", md: "flex" }, 
            alignItems: "center", 
            justifyContent: "center",
            borderRadius: "full",
            color: "black",
            zIndex: 10,
          })}>
            <span className={css({ fontWeight: "bold" })}>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}