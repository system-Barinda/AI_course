import { css } from "../../../styled-system/css";
import { flex, grid, stack } from "../../../styled-system/patterns";

export default function HeroSectionHome() {
  return (
    <section
      className={css({
        minH: "100vh",
        bg: "black",
        color: "white",
        px: { base: "20px", lg: "80px" },
        pt: "24px",
        pb: "40px",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif", // Ensure a modern sans-serif
      })}
    >
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className={flex({ justify: "space-between", align: "center", mb: "40px" })}>
        <div
          className={css({
            bg: "#141414",
            borderRadius: "full",
            pl: "12px",
            pr: "8px",
            py: "8px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          })}
        >
          {/* Logo */}
          <div className={flex({ align: "center", gap: "8px" })}>
            <div className={css({ 
              w: "28px", h: "28px", 
              border: "5px solid #00E699", 
              borderRadius: "full",
              boxShadow: "0 0 10px rgba(0, 230, 153, 0.3)"
            })} />
            <span className={css({ fontWeight: "600", fontSize: "16px", color: "#E0E0E0" })}>Next Scale</span>
          </div>

          {/* Navigation Pills */}
          <div className={flex({ gap: "6px" })}>
            <div className={css({ 
              bg: "white", color: "black", px: "18px", py: "8px", 
              borderRadius: "full", fontSize: "14px", fontWeight: "600", 
              display: "flex", alignItems: "center", gap: "6px" 
            })}>
               <span className={css({ fontSize: "16px" })}>⌂</span> Home
            </div>
            <div className={css({ bg: "rgba(255,255,255,0.08)", p: "10px", borderRadius: "full", fontSize: "14px" })}>ⓘ</div>
            <div className={css({ bg: "rgba(255,255,255,0.08)", p: "10px", borderRadius: "full", fontSize: "14px" })}>❐</div>
            <div className={css({ bg: "rgba(255,255,255,0.08)", p: "10px", borderRadius: "full", fontSize: "14px" })}>☰</div>
          </div>
        </div>

        <button className={css({ 
          bg: "#00E699", color: "black", px: "28px", py: "12px", 
          borderRadius: "full", fontWeight: "bold", fontSize: "14px",
          transition: "all 0.3s", _hover: { transform: "translateY(-2px)", bg: "#00ffaa" }
        })}>
          Contact Us
        </button>
      </nav>

      <div className={grid({ columns: { base: 1, lg: 2 }, gap: "20px", alignItems: "center" })}>
        
        {/* --- LEFT SIDE --- */}
        <div className={stack({ gap: "24px" })}>
          <h1 className={css({ 
            fontSize: { base: "52px", lg: "92px" }, 
            fontWeight: "600", 
            lineHeight: "0.9", 
            letterSpacing: "-0.03em" 
          })}>
            Grow Your <br />
            Business With <br />
            <span className={css({ color: "#00E699" })}>Strategy</span>
          </h1>

          <p className={css({ color: "#999", maxW: "420px", fontSize: "18px", lineHeight: "1.5" })}>
            We help brands transform ideas into profitable business through strategic planning.
          </p>

          <div className={flex({ gap: "12px", pt: "10px" })}>
            <button className={css({ bg: "#141414", color: "white", px: "32px", py: "16px", borderRadius: "20px", fontWeight: "600", fontSize: "16px", border: "1px solid #222" })}>Get Started</button>
            <button className={css({ bg: "#00E699", color: "black", px: "32px", py: "16px", borderRadius: "20px", fontWeight: "700", fontSize: "16px" })}>Learn More</button>
          </div>

          {/* Member Stats */}
          <div className={flex({ align: "center", gap: "16px", pt: "30px" })}>
            <div className={flex({ align: "center" })}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={css({ 
                  w: "48px", h: "48px", borderRadius: "full", 
                  border: "4px solid black", ml: i === 1 ? "0" : "-18px", 
                  overflow: "hidden", bg: "#222" 
                })}>
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <div>
              <div className={css({ fontSize: "28px", fontWeight: "700", color: "white" })}>18K+</div>
              <div className={css({ fontSize: "14px", color: "#666" })}>Our Member</div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE --- */}
        <div className={css({ position: "relative", width: "100%", height: "600px", display: "flex", alignItems: "flex-end" })}>
          
          {/* Scalloped Background Box */}
          <div className={css({
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "100%",
            height: "85%",
            background: "linear-gradient(180deg, #001A11 0%, #003322 100%)",
            borderRadius: "40px",
            // The magic "cutout" effect
            clipPath: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 100%, 0% 100%)",
            overflow: "hidden"
          })}>
             {/* Swirly Pattern Texture */}
             <div className={css({
               width: "200%", height: "200%",
               opacity: 0.3,
               backgroundImage: "radial-gradient(circle at center, #00E699 0%, transparent 60%)",
               filter: "blur(60px)",
               animation: "pulse 8s infinite alternate"
             })} />
          </div>

          {/* Floating Badge (82+) */}
          <div className={css({
            position: "absolute",
            top: "5%",
            right: "0",
            bg: "rgba(10, 10, 10, 0.9)",
            p: "20px",
            borderRadius: "24px",
            zIndex: 10,
            border: "1px solid #222"
          })}>
            <span className={css({ color: "#00E699", fontSize: "28px", fontWeight: "700", display: "block", lineHeight: "1" })}>82+</span>
            <span className={css({ fontSize: "13px", color: "#888", fontWeight: "500" })}>New Service <br/> on here</span>
          </div>

          {/* The Person (spills out of the box) */}
          <img 
            src="/person.png" // Use a transparent background image
            alt="Business Woman"
            className={css({
              position: "relative",
              zIndex: 5,
              height: "100%",
              width: "auto",
              objectFit: "contain",
              margin: "0 auto",
            })}
          />

          {/* Bottom Data Pill */}
          <div className={css({
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            bg: "#00E699",
            color: "black",
            py: "20px",
            px: "40px",
            borderRadius: "28px",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            gap: "30px",
            boxShadow: "0 20px 50px rgba(0, 230, 153, 0.2)",
            whiteSpace: "nowrap"
          })}>
            <div className={stack({ gap: "0" })}>
              <span className={css({ fontWeight: "700", fontSize: "15px" })}>Manufacturer</span>
              <span className={css({ fontSize: "13px", opacity: 0.7 })}>Industrial Strategy</span>
            </div>
            <div className={css({ w: "1.5px", h: "30px", bg: "black", opacity: 0.1 })} />
            <div className={stack({ gap: "0" })}>
              <span className={css({ fontWeight: "700", fontSize: "15px" })}>Agency Partner</span>
              <span className={css({ fontSize: "13px", opacity: 0.7 })}>Production Market</span>
            </div>
          </div>

          {/* Scroll Icon */}
          <div className={css({
            position: "absolute",
            bottom: "120px",
            right: "30px",
            bg: "#00E699",
            w: "44px", h: "44px",
            display: "flex", align: "center", justify: "center",
            borderRadius: "full",
            color: "black",
            zIndex: 10,
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
          })}>
            <span className={css({ transform: "rotate(0deg)", fontWeight: "bold" })}>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}