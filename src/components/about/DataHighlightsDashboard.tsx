import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';

export default function DataHighlightsDashboard() {
  return (
    <div className={css({
      minH: '100vh',
      bg: '#f1f5f9',
      fontFamily: 'body',
      color: '#1e293b',
    })}>

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
