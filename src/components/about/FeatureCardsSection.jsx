import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';

export default function FeatureCardsSection() {
  return (
    <div className={css({
      px: { base: '6', lg: '20' },
      py: '20',
      bg: 'white',
      display: 'grid',
      gridTemplateColumns: { base: '1fr', lg: '1fr 2fr' },
      gap: '12',
      alignItems: 'start'
    })}>

      {/* LEFT SECTION */}
      <div className={stack({ gap: '10' })}>
        <div className={stack({ gap: '4' })}>
          <h2 className={css({ 
            fontSize: '5xl', 
            fontWeight: 'bold', 
            color: '#2d4a53', 
            lineHeight: 'tight' 
          })}>
            Step by Step <br /> AI Mastery
          </h2>
          <p className={css({ color: '#4a5568', fontSize: 'sm', maxW: 'md' })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={css({ color: '#4a5568', fontSize: 'sm', maxW: 'md' })}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className={flex({ 
          bg: '#e2e8f0', 
          p: '4', 
          borderRadius: '2xl', 
          gap: '4', 
          align: 'center',
          maxW: 'md'
        })}>
          <div className={css({ 
            w: '100px', 
            h: '60px', 
            bg: '#cbd5e0', 
            borderRadius: 'xl', 
            overflow: 'hidden' 
          })}>
            <div className={css({ w: 'full', h: 'full', bg: 'gray.400' })} />
          </div>
          <div className={stack({ gap: '0' })}>
            <span className={css({ fontWeight: 'bold', color: '#2d4a53' })}>Subheadline</span>
            <p className={css({ fontSize: 'xs', color: '#718096' })}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className={css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: '1fr 1fr 1fr' },
        gap: '6'
      })}>
        <StepCard title="Headline" stepNumber="1" />

        <div className={css({
          borderRadius: '3xl',
          overflow: 'hidden',
          height: 'full',
          minH: '400px',
          boxShadow: 'xl'
        })}>
          <div className={css({ 
            w: 'full', 
            h: 'full', 
            bg: 'linear-gradient(to bottom, #1a202c, #2d3748)',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            color: 'white'
          })}>
            [Robot Hand Image]
          </div>
        </div>

        <StepCard title="Headline" stepNumber="2" />
      </div>
    </div>
  );
}

// FIXED: Removed the TypeScript type object here
function StepCard({ title, stepNumber }) {
  return (
    <div className={stack({
      bg: 'linear-gradient(135deg, #0f3d2e 0%, #061712 100%)',
      p: '8',
      borderRadius: '3xl',
      gap: '6',
      height: 'full',
      minH: '400px',
      position: 'relative'
    })}>
      <div className={flex({ justify: 'space-between', align: 'start' })}>
        <div className={stack({ gap: '1' })}>
          <h3 className={css({ color: 'white', fontSize: 'xl', fontWeight: 'semibold' })}>{title}</h3>
          <p className={css({ color: 'white/60', fontSize: 'xs' })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={center({ 
          w: '8', h: '8', 
          borderRadius: 'full', 
          border: '1px solid white/40', 
          color: 'white' 
        })}>+</div>
      </div>

      <div className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '4',
        flex: '1',
        py: '4'
      })}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={css({
            aspectRatio: '1/1',
            borderRadius: 'full',
            bg: i >= 9 ? 'white' : 'white/20',
          })} />
        ))}
      </div>

      <button className={center({
        w: 'full',
        py: '3',
        borderRadius: 'full',
        border: '1px solid white/30',
        color: 'white',
        fontSize: 'sm',
        transition: 'all 0.2s',
        _hover: { bg: 'white/10' }
      })}>
        Step {stepNumber}
      </button>
    </div>
  )
}