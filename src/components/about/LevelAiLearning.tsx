import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';
import facerobot from "../../../public/facerobot.jpg"
export default function LevelAiLearning() {
  const chartData = [
    { label: 'Point 1', value: 49 },
    { label: 'Point 2', value: 34 },
    { label: 'Point 3', value: 60 },
    { label: 'Point 4', value: 50 },
    { label: 'Point 5', value: 76 },
  ];

  return (
    <div className={css({
      minH: '100vh',
      bg: "linear-gradient(135deg, #41604e 30%, #cbcfce 50%)", // Light grey base to match the screenshot background
      fontFamily: 'body',
      color: '#1a202c',
      position: 'relative',
      overflow: 'hidden',
    })}>
      
      {/* Background Swirl/Circle Decoration (As seen in the screenshot) */}
      <div className={css({
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        borderRadius: 'full',
        border: '60px solid rgba(0,0,0,0.03)',
        zIndex: 0,
        pointerEvents: 'none',
      })} />

      {/* MAIN CONTENT */}
      <main className={css({
        px: { base: '6', lg: '16' },
        py: '8',
        position: 'relative',
        zIndex: 1,
        height:'60px'
      })}>
        <div className={flex({
          direction: { base: 'column', lg: 'row' },
          gap: { base: '12', lg: '24' },
          align: 'center'
        })}>

          {/* LEFT DARK CARD (AI LEARNING) */}
          <div className={stack({
            background: 'linear-gradient(135deg, #103a2e 0%, #061311 100%)', // Deep AI green-black gradient
            color: 'white',
            p: { base: '8', md: '12' },
            borderRadius: '40px', // Extra rounded corners as per image
            gap: '8',
            flex: '1.1',
            width: 'full',
            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.4)',
            height:'100vh'
          })}>
            <h2 className={css({
              fontSize: { base: '40px', lg: '56px' },
              fontWeight: '600',
              lineHeight: '1.1',
              letterSpacing: '-1px'
            })}>
              Levels of AI Learning
            </h2>

            {/* SEARCH BAR (Glassmorphism) */}
            <div className={flex({
              bg: 'rgba(255,255,255,0.08)',
              borderRadius: 'full',
              px: '6',
              py: '4',
              align: 'center',
              border: '1px solid rgba(255,255,255,0.1)'
            })}>
              <span className={css({ fontSize: 'xl', opacity: 0.6 })}>🔍</span>
              <input
                placeholder="Search Here"
                className={css({
                  ml: '4',
                  bg: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                  fontSize: 'md',
                  flex: 1,
                  _placeholder: { color: 'white/30' }
                })}
              />
            </div>

            <p className={css({
              fontSize: '14px',
              opacity: 0.7,
              lineHeight: '1.6',
              maxW: '90%'
            })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* IMAGE PREVIEW */}
            <div className={css({
              borderRadius: '24px',
              overflow: 'hidden',
              mt: '4',
              aspectRatio: '16/9',
              border: '1px solid rgba(255,255,255,0.1)'
            })}>
              <img
                src={facerobot}
                alt="AI Preview"
                className={css({ w: 'full', h: 'full', objectFit: 'cover' })}
              />
            </div>
          </div>

          {/* RIGHT CHART SECTION */}
          <div className={flex({ 
            flex: '1', 
            width: 'full', 
            justify: 'center', 
            align: 'flex-end',
            h: '500px',
          })}>
            <div className={flex({ 
              align: 'flex-end', 
              gap: { base: '4', md: '10' }, 
              w: 'full',
              maxW: '600px',
              h: 'full',
              pb: '10'
            })}>
              {chartData.map((item, i) => (
                <div key={i} className={stack({ align: 'center', gap: '5', flex: 1 })}>
                  {/* Percentage Value */}
                  <span className={css({ 
                    fontSize: '20px', 
                    fontWeight: '700', 
                    color: '#1a202c' 
                  })}>
                    {item.value}%
                  </span>

                  {/* The Bar with Gradient */}
                  <div className={css({
                    w: 'full',
                    height: `${item.value * 4}px`, // Adjusted scale to match visual height
                    background: 'linear-gradient(180deg, #103a2e 0%, #2d5a4e 100%)',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(16, 58, 46, 0.2)',
                    transition: 'all 0.3s ease',
                    _hover: { 
                      transform: 'translateY(-5px)',
                      filter: 'brightness(1.1)' 
                    }
                  })} />

                  {/* Point Label */}
                  <div className={stack({ align: 'center', gap: '2', w: 'full' })}>
                    <div className={css({ w: 'full', h: '2px', bg: 'black', opacity: 1 })} />
                    <span className={css({ 
                      fontSize: '11px', 
                      fontWeight: '800', 
                      color: '#000',
                      textTransform: 'uppercase'
                    })}>
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}