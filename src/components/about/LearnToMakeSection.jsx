import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';

export default function LearnToMakeSection() {
  return (
    <div className={css({
      minH: '100vh',
      bg: 'learn.bg',
      fontFamily: 'body',
      position: 'relative',
      overflow: 'hidden',
    })}>
      
      {/* Universal Header (No menu, just Logo as requested) */}
      <header className={flex({ justify: 'flex-start', align: 'center', p: '6', lg: { px: '20' } })}>
        <div className={flex({ align: 'center', gap: '2' })}>
          <div className={css({ color: 'learn.title', fontSize: '2xl' })}>✦</div>
          <span className={css({ textTransform: 'uppercase', color: 'learn.title', fontSize: 'xs', letterSpacing: 'widest' })}>Your Logo</span>
        </div>
      </header>

      {/* Main Responsive Grid/Layout Container */}
      <main className={css({
        position: 'relative', // Context for absolute positioned cards
        p: { base: '6', lg: '12' },
        pt: '0',
        color: 'learn.title',
        display: { base: 'stack', lg: 'grid' },
        gridTemplateColumns: { lg: '1fr 1.5fr' }, // Give more room to the image column
        gap: '12',
        alignItems: 'center',
      })}>
        
        {/* Left Section: Text Content */}
        <div className={stack({ gap: '8', pr: { lg: '10' } })}>
          <h1 className={css({ fontSize: { base: '4xl', lg: '6xl' }, fontWeight: 'bold', lineHeight: 'tight' })}>
            Learn to Make Machines Think
          </h1>
          
          {/* Subtle light background sub-card on left */}
          <div className={stack({ 
            bg: 'learn.circle', // Reuse gray dot color for subtle card bg
            p: '5', 
            borderRadius: '2xl', 
            color: 'learn.title/80',
            border: '1px solid token(colors.gray.200)',
          })}>
            <p className={css({ fontSize: 'md', fontWeight: 'semibold' })}>Lorem ipsum dolor sit amet.</p>
            <p className={css({ fontSize: 'xs', maxW: '2xl' })}>
              Unlock the core tenets of machine learning. Focus on practical projects, robust theory,
              and standard benchmarks. Mastery is a process.
            </p>
          </div>
        </div>

        {/* Right Section: Large Image and Floaters (Exactly as image_2.png) */}
        <div className={css({ 
          position: 'relative', 
          aspectRatio: { base: '16/10', md: 'auto' }, // Responsive aspect ratio
          minH: { lg: '80vh' },
          bg: 'gray.800', // Mock main background image
          borderRadius: '3xl',
          overflow: { base: 'visible', md: 'visible' }, // Important: allow cards to overlap
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        })}>
          {/* Main Mock Image Container */}
          <div className={css({
            w: 'full',
            h: 'full',
            bg: 'gray.800', // Actual background image placeholder
            borderRadius: '3xl',
            overflow: 'hidden'
          })}>
             <img src="/mock-ai-laptop.jpg" alt="A person working on a laptop" className={css({ objectFit: 'cover', w: 'full', h: 'full' })} />
          </div>

          {/* Floating Card: "Smart Algorithms" */}
          <div className={css({
            position: 'absolute',
            // Relative coordinates from top-left of the image container on Desktop
            top: '-60px', 
            left: '-100px', 
            display: { base: 'none', lg: 'flex' }, // Hide complex overlap on mobile

            // Content Styling (exactly as in image)
            width: '380px',
            bg: 'linear-gradient(135deg, #10352A 0%, #0A2A22 100%)',
            color: 'white',
            borderRadius: '2xl',
            p: '6',
            flexDirection: 'column',
            gap: '6',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          })}>
            {/* Card Header */}
            <div className={flex({ justify: 'space-between', align: 'center' })}>
              <h3 className={css({ fontSize: '2xl', fontWeight: 'semibold' })}>Smart Algorithms</h3>
              <button className={center({ 
                w: '8', h: '8', 
                borderRadius: 'full', 
                border: '1px solid white', 
                color: 'white', 
                fontSize: 'xl' 
              })}>+</button>
            </div>

            {/* Grid of Dots (Centerpiece) */}
            <div className={flex({ gap: '3', wrap: 'wrap', flex: '1', justify: 'center' })}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={css({ 
                  w: '16', h: '16', 
                  borderRadius: 'full', 
                  bg: i >= 6 ? 'white' : 'learn.circle' // Bottom row is white
                })} />
              ))}
            </div>

            {/* Card Footer */}
            <div className={flex({ justify: 'flex-start', align: 'flex-end', gap: '3', mt: 'auto' })}>
              <span className={css({ fontSize: '4xl', fontWeight: 'bold', color: 'white' })}>$567</span>
              <p className={css({ fontSize: '10px', color: 'white/60', pb: '1px' })}>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          {/* Floating Card: Small Details Card */}
          <div className={css({
            position: 'absolute',
            // Coordinates from top-right corner of the image container
            bottom: '-40px',
            right: { base: '-20px', lg: '100px' }, // Moves further in on Desktop
            
            // Content Styling
            width: '280px',
            bg: 'linear-gradient(135deg, #10352A 0%, #0A2A22 100%)',
            p: '5',
            color: 'white',
            borderRadius: '2xl',
            boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
          })}>
            <div className={flex({ 
              bg: 'learn.circle/10', 
              p: '2', 
              borderRadius: 'full', 
              fontSize: 'xs', 
              display: 'inline-flex',
              mb: '3',
              border: '1px solid white/30',
            })}>
              Your Data <span className={css({ ml: '1' })}>☰</span>
            </div>
            <p className={css({ fontSize: 'xs', color: 'white/80' })}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}