import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';
import robot from "../../../public/robot.png"

export default function LearnToMakeSection() {
  return (
    <div className={css({
      minH: '100vh',
      bg: '#f8fafc',
      fontFamily: 'body',
    })}>

      {/* MAIN */}
      <main className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1.2fr 0.8fr 1fr' },
        gap: '10',
        px: '10',
        alignItems: 'center'
      })}>

        {/* LEFT */}
        <div className={stack({ gap: '8' })}>
          <h1 className={css({
            fontSize: { base: '4xl', lg: '6xl' },
            fontWeight: 'bold',
            color: '#334155',
            lineHeight: '1.1'
          })}>
            Learn to Make
            <br /> Machines Think
          </h1>

          {/* CARD */}
          <div className={stack({
            bg: '#0f3d2e',
            p: '6',
            borderRadius: '2xl',
            color: 'white',
            gap: '5',
            boxShadow: 'lg'
          })}>
            <div className={flex({ justify: 'space-between', align: 'center' })}>
              <span className={css({ fontSize: 'lg', opacity: 0.8 })}>Smart Algorithms</span>
              <div className={center({ w: '8', h: '8', border: '1px solid white', borderRadius: 'full' })}>+</div>
            </div>

            {/* GRID */}
            <div className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '3'
            })}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={css({
                  height: '55px',
                  borderRadius: 'lg',
                  bg: i > 5 ? 'white' : 'rgba(255,255,255,0.2)'
                })} />
              ))}
            </div>

            <div className={flex({ justify: 'space-between', align: 'flex-end' })}>
              <span className={css({ fontSize: '3xl', fontWeight: 'bold' })}>$567</span>
              <span className={css({ fontSize: '10px', opacity: 0.6 })}>Lorem ipsum dolor sit amet</span>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className={stack({ gap: '6', align: 'center' })}>
          <div className={css({
            width: '220px',
            height: '220px',
            borderRadius: '2xl',
            overflow: 'hidden'
          })}>
            <img src="/robot-portrait.jpg" className={css({ w: 'full', h: 'full', objectFit: 'cover' })} />
          </div>

          <div className={stack({
            bg: '#0f3d2e',
            p: '4',
            borderRadius: 'xl',
            color: 'white',
            width: '220px'
          })}>
            <div className={flex({ justify: 'space-between', align: 'center' })}>
              <span className={css({ fontSize: 'xs' })}>Your Data</span>
            </div>
            <p className={css({ fontSize: 'xs', opacity: 0.7 })}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* RIGHT PHONE */}
        <div className={css({
          height: '520px',
          borderRadius: '40px',
          overflow: 'hidden',
          bg: 'black',
          border: '8px solid #111',
          position: 'relative'
        })}>
          {/* notch */}
          <div className={css({
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90px',
            height: '20px',
            bg: '#111',
            borderRadius: 'full'
          })} />

          <img src={robot} className={css({ w: 'full', h: 'full', objectFit: 'cover' })} />
        </div>

      </main>
    </div>
  );
}
