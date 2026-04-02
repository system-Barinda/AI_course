import { css } from "../../../styled-system/css";

export default function LearningFormat() {
  return (
    <div
      className={css({
        bg: "linear-gradient(135deg, #192f2a 10%, #358c76 80%)", // Light gray background
        p: { base: "6", md: "10" },
        minH: "auto",
        fontFamily: "sans-serif",
      })}
    >

      {/* MAIN CONTENT GRID */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", lg: "1.2fr 0.8fr" },
          gap: "8",
        })}
      >
        {/* LEFT SECTION (GRID WITHIN GRID) */}
        <div className={css({ display: "flex", flexDirection: "column", gap: "6" })}>
          <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", md: "1fr 1.2fr" }, gap: "6" })}>
            {/* TOP LEFT IMAGE */}
            <div
              className={css({
                h: "240px",
                borderRadius: "2xl",
                backgroundImage: "url('/personcode2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "lg",
              })}
            />

            {/* HEADER TEXT - Now on the right of the first image */}
            <div className={css({ textAlign: "left" })}>
              <h2 className={css({ fontSize: "4xl", fontWeight: "700", color: "#dee5ef", mb: "4" })}>
                Learning Format
              </h2>
              <p className={css({color: "#dee5ef", fontSize: "sm", lineHeight: "1.6", mb: "4" })}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
              <p className={css({ color: "#dee5ef", fontSize: "xs", fontStyle: "italic" })}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.
              </p>
            </div>
          </div>

          {/* BOTTOM LEFT ROW (STATS + SECOND IMAGE) */}
          <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", md: "1fr 1fr 2.2fr" }, gap: "4" })}>
            {/* STAT CARD 1 */}
            <div className={css({ bgGradient: "to-b", gradientFrom: "#0f766e", gradientTo: "#064e3b", p: "6", borderRadius: "2xl", color: "white", textAlign: "center" })}>
              <div className={css({ fontSize: "2xl", mb: "2" })}>🏛️</div>
              <div className={css({ fontSize: "3xl", fontWeight: "700" })}>45%</div>
              <div className={css({ mt: "4", p: "2", bg: "rgba(255,255,255,0.1)", borderRadius: "lg", fontSize: "9px" })}>
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>

            {/* STAT CARD 2 */}
            <div className={css({ bgGradient: "to-b", gradientFrom: "#134e4a", gradientTo: "#022c22", p: "6", borderRadius: "2xl", color: "white", textAlign: "center" })}>
              <div className={css({ fontSize: "2xl", mb: "2" })}>🏛️</div>
              <div className={css({ fontSize: "3xl", fontWeight: "700" })}>65%</div>
              <div className={css({ mt: "4", p: "2", bg: "rgba(255,255,255,0.1)", borderRadius: "lg", fontSize: "9px" })}>
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>

            {/* SECOND IMAGE (MATRIX/CODE) */}
            <div className={css({ borderRadius: "2xl", backgroundImage: "url('/personcode1.jpg')", backgroundSize: "cover", h: "100%", minH: "180px" })} />
          </div>
        </div>

        {/* RIGHT SECTION (PROJECT PILLS) */}
        <div className={css({ display: "flex", flexDirection: "column", gap: "4", justifyContent: "center" })}>
          {[
            { title: "Project", sub: "Subheadline" },
            { title: "Project", sub: "Subheadline" },
            { title: "Project", sub: "Subheadline" },
            { title: "Project", sub: "Subheadline" },
          ].map((item, i) => (
            <div
              key={i}
              className={css({
                bgGradient: "to-br",
                gradientFrom: "#115e59",
                gradientTo: "#064e3b",
                color: "white",
                px: "8",
                py: "5",
                borderRadius: "3xl",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "md",
              })}
            >
              <div>
                <p className={css({ fontSize: "sm", fontWeight: "600" })}>{item.title}</p>
                <p className={css({ fontSize: "xs", opacity: "0.7" })}>{item.sub}</p>
              </div>
              <div className={css({ w: "28px", h: "28px", bg: "white", color: "#115e59", borderRadius: "full", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "bold" })}>
                ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}