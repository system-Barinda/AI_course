import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';

export default function LearnToMakeSection() {
  return (
    <div className={css({
      minH: '100vh',
      bg: 'white', // Bright white background as seen in image
      fontFamily: 'body',
      position: 'relative',
      overflow: 'hidden',
    })}>
      
      {/* 1. Header: Logo Left, Links Right (Matching Screenshot) */}
      <header className={flex({ justify: 'space-between', align: 'center', p: '6', lg: { px: '20' } })}>
        <div className={flex({ align: 'center', gap: '2' })}>
          <div className={css({ color: 'black', fontSize: '2xl' })}>✦</div>
          <span className={css({ textTransform: 'uppercase', color: 'black', fontSize: 'xs', fontWeight: 'bold' })}>Your Logo</span>
        </div>
        <div className={flex({ gap: '8', align: 'center' })}>
           <span className={css({ fontSize: 'xs', border: '1px solid black', px: '3', py: '1', borderRadius: 'full' })}>ABOUT US</span>
           <span className={css({ fontSize: 'xs' })}>PRODUCT</span>
           <span className={css({ fontSize: 'xs' })}>CONTACT US</span>
           <div className={center({ w: '8', h: '8', bg: 'black', color: 'white', borderRadius: 'full' })}>☰</div>
        </div>
      </header>

      {/* 2. Main Layout Container */}
      <main className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', lg: '1fr 1fr 1.2fr' }, // Three-column feel from image
        gap: '8',
        px: { base: '6', lg: '20' },
        alignItems: 'start',
      })}>
        
        {/* LEFT COLUMN: Title and Big Card */}
        <div className={stack({ gap: '10' })}>
          <h1 className={css({ fontSize: { base: '4xl', lg: '7xl' }, fontWeight: 'bold', color: '#1a365d', lineHeight: '1.1' })}>
            Learn to Make Machines Think
          </h1>

          {/* Green "Smart Algorithms" Card */}
          <div className={stack({
            bg: 'linear-gradient(to bottom right, #103a2e, #061311)',
            p: '8',
            borderRadius: '3xl',
            color: 'white',
            gap: '6',
            boxShadow: 'xl'
          })}>
            <div className={flex({ justify: 'space-between', align: 'center' })}>
              <span className={css({ fontSize: '2xl', fontWeight: 'light', opacity: 0.8 })}>Smart Algorithms</span>
              {/* FIXED: Changed </button> to </div> and removed stray "Great" text */}
              <div className={center({ w: '10', h: '10', border: '1px solid white', borderRadius: 'full', fontSize: '2xl', cursor: 'pointer' })}>+</div>
            </div>
            
            {/* The Dots Grid */}
            <div className={flex({ gap: '3', wrap: 'wrap' })}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={css({ 
                  w: '20', h: '20', 
                  borderRadius: 'xl', 
                  bg: i > 5 ? 'white/90' : 'white/20', // Bottom row highlighted white
                  backdropFilter: 'blur(4px)'
                })} />
              ))}
            </div>

            <div className={flex({ justify: 'space-between', align: 'flex-end', mt: '4' })}>
              <span className={css({ fontSize: '4xl', fontWeight: 'bold' })}>$567</span>
              <p className={css({ fontSize: '10px', textAlign: 'right', opacity: 0.6 })}>Lorem ipsum<br/>dolor sit amet</p>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: Small Floaties */}
        <div className={stack({ gap: '6', pt: '10' })}>
          {/* Top Robot Image (Square-ish) */}
          <div className={css({ 
            width: 'full', 
            aspectRatio: '1/1', 
            borderRadius: '3xl', 
            overflow: 'hidden',
            bg: '#ccc' 
          })}>
            <img src="/robot-portrait.jpg" className={css({ w: 'full', h: 'full', objectFit: 'cover' })} />
          </div>

          {/* Bottom Green "Your Data" Card */}
          <div className={stack({
            bg: 'linear-gradient(to bottom right, #103a2e, #061311)',
            p: '5',
            borderRadius: '2xl',
            color: 'white',
            gap: '3'
          })}>
            <div className={flex({ bg: 'white/10', border: '1px solid white/20', px: '3', py: '1', borderRadius: 'full', align: 'center', justify: 'space-between', fontSize: 'xs', w: 'fit-content' })}>
              Your Data <span className={css({ ml: '4' })}>☰</span>
            </div>
            <p className={css({ fontSize: 'xs', opacity: 0.7, lineHeight: '1.4' })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Phone Display */}
        <div className={css({
          height: '80vh',
          bg: '#000',
          borderRadius: '40px',
          border: '8px solid #222',
          overflow: 'hidden',
          position: 'relative'
        })}>
          {/* Top Notch/Dynamic Island */}
          <div className={css({ position: 'absolute', top: '4', left: '50%', transform: 'translateX(-50%)', w: '80px', h: '25px', bg: '#111', borderRadius: 'full' })} />
          
          <img 
            src="/robot-phone-bg.jpg" 
            className={css({ w: 'full', h: 'full', objectFit: 'cover', opacity: 0.8 })} 
          />
        </div>

      </main>
    </div>
  );
}