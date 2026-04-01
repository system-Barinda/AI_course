import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';

export default function LevelAiLearning() {
  const chartData = [
    { label: 'Point 1', value: 49 },
    { label: 'Point 2', value: 34 },
    { label: 'Point 3', value: 60 },
    { label: 'Point 4', value: 50 },
    { label: 'Point 5', value: 76 },
  ];

  return (
    <main className={css({
      px: { base: '6', lg: '16' },
      py: '12',
    })}>
      <div className={flex({
        direction: { base: 'column', lg: 'row' },
        gap: '16',
        align: 'center'
      })}>

        {/* LEFT CARD */}
        <div className={stack({
          bg: 'linear-gradient(135deg, #0f3d3e, #134e4a)',
          color: 'white',
          p: { base: '6', md: '10' },
          borderRadius: '32px',
          gap: '6',
          flex: 1,
          width: 'full',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
        })}>

          <h2 className={css({
            fontSize: '36px',
            fontWeight: 'bold',
            lineHeight: '1.2'
          })}>
            Levels of AI Learning
          </h2>

          {/* SEARCH */}
          <div className={flex({
            bg: 'rgba(255,255,255,0.15)',
            borderRadius: '999px',
            px: '5',
            py: '3',
            align: 'center',
            backdropFilter: 'blur(6px)'
          })}>
            <span className={css({ opacity: 0.7 })}>🔍</span>
            <input
              placeholder="Search Here"
              className={css({
                ml: '3',
                bg: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: 'sm',
                flex: 1,
                _placeholder: { color: 'white/50' }
              })}
            />
          </div>

          <p className={css({
            fontSize: '13px',
            opacity: 0.85,
            lineHeight: '1.7'
          })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* IMAGE */}
          <div className={css({
            borderRadius: '20px',
            overflow: 'hidden',
            mt: '2'
          })}>
            <img
              src="/mock-ai-visual.jpg"
              alt="AI"
              className={css({
                w: 'full',
                h: '200px',
                objectFit: 'cover'
              })}
            />
          </div>
        </div>

        {/* RIGHT CHART */}
        <div className={flex({
          flex: 1,
          width: 'full',
          justify: 'center',
          align: 'flex-end',
          h: '420px',
          position: 'relative'
        })}>

          {/* Background curve effect */}
          <div className={css({
            position: 'absolute',
            top: '-80px',
            right: '-50px',
            w: '300px',
            h: '300px',
            borderRadius: '50%',
            bg: 'rgba(30, 10, 10, 0.05)'
          })} />

          <div className={flex({
            align: 'flex-end',
            gap: '6',
            w: 'full',
            maxW: '500px'
          })}>

            {chartData.map((item, i) => (
              <div key={i} className={stack({
                align: 'center',
                gap: '3',
                flex: 1
              })}>

                {/* % */}
                <span className={css({
                  fontSize: '14px',
                  fontWeight: 'bold'
                })}>
                  {item.value}%
                </span>

                {/* BAR */}
                <div className={css({
                  width: '100%',
                  height: `${item.value * 3}px`,
                  borderRadius: '16px',
                  background: 'linear-gradient(180deg, #1f7a7a, #0f3d3e)',
                  transition: '0.3s',
                  _hover: {
                    transform: 'scaleY(1.05)'
                  }
                })} />

                {/* LABEL */}
                <span className={css({
                  fontSize: '10px',
                  opacity: 0.6
                })}>
                  {item.label}
                </span>

              </div>
            ))}

          </div>
        </div>

      </div>
    </main>
  );
}