import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';

export default function LevelAiLearning() {
  return (
    <div className={css({
      minH: '100vh',
      bg: '#f1f5f9',
      fontFamily: 'body',
      color: '#1e293b',
    })}>

      {/* HEADER */}
      <header className={flex({
        justify: 'space-between',
        align: 'center',
        px: { base: '6', lg: '16' },
        py: '6'
      })}>

        <div className={flex({ align: 'center', gap: '2' })}>
          <div>✦</div>
          <span className={css({ fontSize: 'xs', fontWeight: 'bold' })}>
            YOUR LOGO
          </span>
        </div>

        <div className={flex({ gap: '6', align: 'center' })}>
          <span className={css({ fontSize: 'xs', border: '1px solid #000', px: '3', py: '1', borderRadius: 'full' })}>ABOUT US</span>
          <span className={css({ fontSize: 'xs' })}>PRODUCT</span>
          <span className={css({ fontSize: 'xs' })}>CONTACT US</span>
          <div className={center({ w: '8', h: '8', bg: '#111', color: 'white', borderRadius: 'full' })}>•</div>
        </div>
      </header>

      {/* MAIN GRID */}
      <main className={css({
        px: { base: '6', lg: '16' },
        pb: '16',
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1.2fr 0.8fr 1fr' },
        gap: '8',
        alignItems: 'start'
      })}>

        {/* LEFT */}
        <div className={stack({ gap: '6' })}>
          <h1 className={css({
            fontSize: { base: '3xl', lg: '5xl' },
            fontWeight: 'bold'
          })}>
            AI Course
            <br /> Data Highlights
          </h1>

          <p className={css({ fontSize: 'sm', color: '#475569' })}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aspernatur.
          </p>

          <div className={flex({ gap: '4', direction: { base: 'column', md: 'row' } })}>

            {/* ~78M CARD */}
            <div className={stack({
              bg: '#0f3d2e',
              color: 'white',
              p: '5',
              borderRadius: '2xl',
              w: { base: 'full', md: '160px' },
              justify: 'space-between'
            })}>
              <span className={css({ fontSize: '2xl', fontWeight: 'bold' })}>~78M</span>
              <p className={css({ fontSize: 'xs', opacity: 0.8 })}>
                Lorem ipsum dolor sit amet
              </p>
            </div>

            {/* IMAGE CARD */}
            <div className={css({
              flex: 1,
              borderRadius: '2xl',
              overflow: 'hidden'
            })}>
              <img src="/dashboard-mock-1.jpg" className={css({ w: 'full', h: 'full', objectFit: 'cover' })} />
            </div>

          </div>
        </div>

        {/* MIDDLE 12X */}
        <div className={stack({
          bg: '#0f3d2e',
          color: 'white',
          borderRadius: '2xl',
          p: '6',
          height: { base: 'auto', lg: '100%' },
          justify: 'space-between'
        })}>
          <div>📚</div>
          <div>
            <span className={css({ fontSize: '4xl', fontWeight: 'bold' })}>12X</span>
            <p className={css({ fontSize: 'xs', opacity: 0.7 })}>
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className={stack({ gap: '6' })}>

          {/* TOP IMAGE */}
          <div className={css({ borderRadius: '2xl', overflow: 'hidden' })}>
            <img src="/dashboard-mock-2.jpg" className={css({ w: 'full', h: '180px', objectFit: 'cover' })} />
          </div>

          {/* GRAPH CARD */}
          <div className={stack({
            bg: '#0f3d2e',
            color: 'white',
            p: '5',
            borderRadius: '2xl'
          })}>

            <span className={css({ fontSize: '10px', opacity: 0.6 })}>
              AI COUNTING FORMAT
            </span>

            <svg width="100%" height="60" viewBox="0 0 240 60" fill="none" stroke="white" strokeWidth="2">
              <path d="M0 30 C 20 50, 40 10, 60 40 S 80 50, 100 20 S 120 60, 140 30 S 160 10, 180 50 S 200 60, 220 30" />
            </svg>

            <span className={css({ fontSize: '3xl', fontWeight: 'bold' })}>
              10,000+
            </span>

          </div>

        </div>

      </main>
    </div>
  );
}

// ================= LEVELS OF AI LEARNING SECTION =================

export function LevelsOfAILearning() {
  return (
    <div className={css({
      px: { base: '6', lg: '16' },
      py: '16',
      bg: '#f8fafc'
    })}>

      <div className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1.2fr 1fr' },
        gap: '8',
        alignItems: 'center'
      })}>

        {/* LEFT CARD */}
        <div className={stack({
          bg: '#0f3d2e',
          color: 'white',
          p: '6',
          borderRadius: '2xl',
          gap: '4',
          boxShadow: 'lg'
        })}>

          <h2 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
            Levels of AI Learning
          </h2>

          {/* SEARCH BAR */}
          <div className={flex({
            bg: 'rgba(255,255,255,0.15)',
            borderRadius: 'full',
            px: '4',
            py: '2',
            align: 'center'
          })}>
            <span className={css({ fontSize: 'sm', opacity: 0.7 })}>🔍</span>
            <input
              placeholder="Search here"
              className={css({
                ml: '2',
                bg: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: 'sm',
                flex: 1,
                _placeholder: { color: 'white/60' }
              })}
            />
          </div>

          <p className={css({ fontSize: 'xs', opacity: 0.8 })}>
            Learn AI step by step from beginner to advanced level with structured learning paths.
          </p>

          {/* IMAGE */}
          <div className={css({
            borderRadius: 'xl',
            overflow: 'hidden',
            mt: '2'
          })}>
            <img
              src="/ai-learning.jpg"
              className={css({ w: 'full', h: '140px', objectFit: 'cover' })}
            />
          </div>

        </div>

        {/* RIGHT CHART */}
        <div className={css({
          bg: 'white',
          borderRadius: '2xl',
          p: '6',
          boxShadow: 'md'
        })}>

          <div className={flex({ justify: 'space-between', mb: '4' })}>
            <span className={css({ fontWeight: 'bold' })}>Progress</span>
            <span className={css({ fontSize: 'sm', color: '#64748b' })}>75%</span>
          </div>

          {/* BAR CHART */}
          <div className={flex({ align: 'flex-end', gap: '4', h: '200px' })}>

            {[40, 34, 60, 50, 75].map((value, i) => (
              <div key={i} className={stack({ align: 'center', gap: '2', flex: 1 })}>

                <div className={css({
                  w: '100%',
                  height: `${value}%`,
                  bg: '#0f3d2e',
                  borderRadius: 'lg',
                  transition: '0.3s',
                  _hover: { opacity: 0.8 }
                })} />

                <span className={css({ fontSize: '10px', color: '#64748b' })}>
                  Point {i + 1}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

