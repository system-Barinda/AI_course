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
        pt: "40px",
        fontFamily: "sans-serif",
      })}
    >
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className={flex({ justify: "space-between", align: "center", mb: "60px" })}>
        {/* Pill-shaped Brand/Nav Container */}
        <div
          className={css({
            bg: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "full",
            px: "10px",
            py: "8px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          })}
        >
          {/* Logo */}
          <div className={flex({ align: "center", gap: "8px", px: "10px" })}>
            <div className={css({ w: "24px", h: "24px", border: "4px solid #00E699", borderRadius: "full" })} />
            <span className={css({ fontWeight: "600", fontSize: "15px" })}>Next Scale</span>
          </div>

          {/* Internal Nav Pills */}
          <div className={flex({ gap: "8px" })}>
            <div className={css({ bg: "white", color: "black", px: "20px", py: "6px", borderRadius: "full", fontSize: "14px", fontWeight: "500", display: "flex", alignItems: "center", gap: "5px" })}>
               <span>🏠</span> Home
            </div>
            <div className={css({ bg: "rgba(255,255,255,0.1)", p: "8px", borderRadius: "full", cursor: "pointer" })}>ⓘ</div>
            <div className={css({ bg: "rgba(255,255,255,0.1)", p: "8px", borderRadius: "full", cursor: "pointer" })}>❐</div>
            <div className={css({ bg: "rgba(255,255,255,0.1)", p: "8px", borderRadius: "full", cursor: "pointer" })}>☰</div>
          </div>
        </div>

        {/* Contact Button */}
        <button className={css({ bg: "#00E699", color: "black", px: "24px", py: "10px", borderRadius: "full", fontWeight: "bold", fontSize: "14px", cursor: "pointer", transition: "transform 0.2s", _hover: { transform: "scale(1.05)" } })}>
          Contact Us
        </button>
      </nav>

      <div className={grid({ columns: { base: 1, lg: 2 }, gap: "40px", alignItems: "flex-end" })}>
        
        {/* --- LEFT SIDE: HERO CONTENT --- */}
        <div className={stack({ gap: "32px", pb: "40px" })}>
          <h1 className={css({ fontSize: { base: "48px", lg: "84px" }, fontWeight: "600", lineHeight: "0.95", letterSpacing: "-0.04em" })}>
            Grow Your <br />
            Business With <br />
            <span className={css({ color: "#00E699" })}>Strategy</span>
          </h1>

          <p className={css({ color: "rgba(255,255,255,0.6)", maxW: "380px", fontSize: "18px", lineHeight: "1.6" })}>
            We help brands transform ideas into profitable business through strategic planning.
          </p>

          <div className={flex({ gap: "16px" })}>
            <button className={css({ bg: "#1A1A1A", px: "32px", py: "14px", borderRadius: "full", fontWeight: "500" })}>Get Started</button>
            <button className={css({ bg: "#00E699", color: "black", px: "32px", py: "14px", borderRadius: "full", fontWeight: "bold" })}>Learn More</button>
          </div>

          {/* Social Proof */}
          <div className={flex({ align: "center", gap: "16px", pt: "20px" })}>
            <div className={flex({ align: "center" })}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={css({ w: "45px", h: "45px", borderRadius: "full", border: "3px solid black", ml: i === 1 ? "0" : "-15px", overflow: "hidden", bg: "gray.700" })}>
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="avatar" />
                </div>
              ))}
            </div>
            <div>
              <div className={css({ fontSize: "24px", fontWeight: "bold", color: "#00E699" })}>18K+</div>
              <div className={css({ fontSize: "14px", color: "gray.400" })}>Our Member</div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: IMAGE & DECORATION --- */}
        <div className={css({ position: "relative", width: "100%", height: "100%" })}>
          
          {/* Green "Liquid" Background Shape */}
          <div className={css({
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: 0,
            width: "90%",
            height: "100%",
            background: "linear-gradient(135deg, #004D33 0%, #00E699 100%)",
            maskImage: "radial-gradient(circle at 20% 20%, transparent 150px, black 151px)", // Simplified scallop effect
            borderRadius: "40px",
            overflow: "hidden"
          })}>
             {/* Swirly Overlay (Using a CSS gradient for texture) */}
             <div className={css({
               width: "100%",
               height: "100%",
               opacity: 0.4,
               backgroundImage: "repeating-radial-gradient(circle at 50% 50%, transparent, #00E699 100px)",
               filter: "blur(40px)"
             })} />
          </div>

          {/* Badge: 82+ */}
          <div className={css({
            position: "absolute",
            top: "40px",
            right: "40px",
            bg: "rgba(0,0,0,0.8)",
            p: "16px",
            borderRadius: "20px",
            zIndex: 2,
            textAlign: "left"
          })}>
            <span className={css({ color: "#00E699", fontSize: "24px", fontWeight: "bold", display: "block" })}>82+</span>
            <span className={css({ fontSize: "12px", color: "gray.300" })}>New Service <br/> on here</span>
          </div>

          {/* Person Image */}
          <img 
            src="/person-holding-laptop.png" // Replace with your actual transparent PNG
            alt="Consultant"
            className={css({
              position: "relative",
              zIndex: 1,
              maxW: "110%",
              ml: "-5%",
              display: "block"
            })}
          />

          {/* Floating Info Pill at Bottom */}
          <div className={css({
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            bg: "#00E699",
            color: "black",
            p: "24px",
            borderRadius: "24px",
            zIndex: 3,
            display: "flex",
            gap: "40px",
            minW: "max-content",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
          })}>
            <div>
              <div className={css({ fontWeight: "600", fontSize: "14px" })}>Manufacturer</div>
              <div className={css({ fontSize: "13px", opacity: 0.8 })}>Industrial Strategy</div>
            </div>
            <div className={css({ w: "1px", bg: "black", opacity: 0.1 })} />
            <div>
              <div className={css({ fontWeight: "600", fontSize: "14px" })}>Agency Partner</div>
              <div className={css({ fontSize: "13px", opacity: 0.8 })}>Production Market</div>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <div className={css({
            position: "absolute",
            bottom: "100px",
            right: "20px",
            bg: "#00E699",
            p: "10px",
            borderRadius: "full",
            color: "black",
            zIndex: 2
          })}>
            ↓
          </div>
        </div>

      </div>
    </section>
  );
}