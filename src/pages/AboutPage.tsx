import { css } from '../../styled-system/css';
import { flex, stack, center } from '../../styled-system/patterns';
import LearnToMakeSection from "../components/about/LearnToMakeSection"
import FeatureCardsSection from "../components/about/FeatureCardsSection"

export default function AboutPage() {
  return (<>
    <div className={css({ minH: '100vh', bg: 'about.bg', fontFamily: 'body' })}>
      
      {/* 1. Universal Header (as seen in image_1.png) */}
      <header className={flex({ justify: 'space-between', align: 'center', p: '6', lg: { px: '20' } })}>
        <div className={flex({ align: 'center', gap: '2' })}>
          {/* Reuse the logo/star icon style from the previous page */}
          <div className={css({ color: 'about.text', fontSize: '2xl' })}>✦</div>
          <span className={css({ textTransform: 'uppercase', color: 'about.text', fontSize: 'xs', letterSpacing: 'widest' })}>Your Logo</span>
        </div>
        
        {/* Navigation Items */}
        <div className={flex({ gap: '8', align: 'center', color: 'about.text', display: { base: 'none', md: 'flex' } })}>
          <a href="/about" className={css({ border: '1px solid currentColor', px: '4', py: '1', borderRadius: 'full', fontSize: 'sm' })}>ABOUT US</a>
          <a href="#" className={css({ fontSize: 'sm' })}>PRODUCT</a>
          <a href="#" className={css({ fontSize: 'sm' })}>CONTACT US</a>
          <button className={css({ border: '1px solid currentColor', color: 'currentColor', borderRadius: 'full', w: '8', h: '8', display: 'grid', placeItems: 'center' })}>
            ☰
          </button>
        </div>
      </header>

      {/* 2. Main Content Section */}
      <main className={flex({ 
        direction: { base: 'column', lg: 'row' }, // Stack on mobile, row on desktop
        p: { base: '6', lg: '20' },
        gap: '12'
      })}>
        
        {/* Left Side: Content and subtle sub-card */}
        <div className={stack({ flex: '1', gap: '10' })}>
          {/* Main Heading/Copy */}
          <div className={stack({ gap: '3', color: 'about.text' })}>
            <h1 className={css({ fontSize: '5xl', fontWeight: 'bold' })}>Step by Step <br /> AI Mastery</h1>
            <p className={css({ fontSize: 'md', maxW: '2xl', color: 'about.text/80' })}>
              Unlock the secrets of Artificial Intelligence. Dive deep into complex concepts 
              with our structured learning approach. Learn at your own pace with practical examples.
              Explore the theoretical foundations and their real-world applications.
              Mastery isn't an accident; it's a step-by-step process.
            </p>
          </div>

          {/* Left-side Sub-card (with image & text) */}
          <div className={flex({ 
            bg: 'about.subtleCard', 
            p: '5', 
            borderRadius: '2xl', 
            align: 'center',
            gap: '5',
            w: 'full',
            maxW: 'xl'
          })}>
            <div className={css({ 
              aspectRatio: '16/10', 
              w: '120px', 
              bg: 'gray.800', // Mock image
              borderRadius: 'xl', 
              overflow: 'hidden' 
            })}>
              <img src="/mock-image-laptop.jpg" alt="A person on a laptop" className={css({ objectFit: 'cover', w: 'full', h: 'full' })} />
            </div>
            <div className={stack({ gap: '1', color: 'about.text' })}>
              <p className={css({ fontSize: 'md', fontWeight: 'semibold' })}>Subheadline</p>
              <p className={css({ fontSize: 'xs', color: 'about.text/70' })}>
                Focused modules on the core tenets of machine learning.
                Practical projects with real datasets.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Step Cards Grid */}
        <div className={flex({ 
          flex: '1.2', 
          gap: '6', 
          direction: { base: 'column', sm: 'row' },
          justify: { lg: 'center' }
        })}>
          
          {/* "Step 1" Card */}
          <StepCard 
            title="Headline"
            stepText="Step 1"
          />

          {/* "Step 2" Card (Robot Hand) */}
          <div className={css({
            flex: '1',
            borderRadius: '2xl',
            overflow: 'hidden',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            _hover: { transform: 'translateY(-5px)' }
          })}>
            <img 
              src="/mock-image-robot.jpg" 
              alt="Close-up of a detailed robotic hand" 
              className={css({ objectFit: 'cover', w: 'full', h: 'full' })} 
            />
          </div>

          {/* "Step 3" Card */}
          <StepCard 
            title="Headline"
            stepText="Step 2" // This maps to the third card in the sequence
          />
        </div>
      </main>
    </div>
    <LearnToMakeSection />
    <FeatureCardsSection />
    </>
  );
}

// Reuseable Component for the Step Cards (Dark Teal with dots)
// Reusable Component for the Step Cards (Dark Teal with dots)
function StepCard({ title, stepText }: { title: string; stepText: string }) {
  return (
    <div className={css({
      flex: '1',
      bg: 'about.card',
      p: '8',
      color: 'white',
      borderRadius: '2xl',
      display: 'flex',
      flexDirection: 'column',
      gap: '8',
      w: 'full',
      minH: '400px',
      _hover: { boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }
    })}>
      {/* Header of the Card */}
      <div className={flex({ justify: 'space-between', align: 'start' })}>
        <div>
          <h3 className={css({ fontSize: 'xl', fontWeight: 'semibold' })}>{title}</h3>
          <p className={css({ fontSize: 'xs', color: 'white/60', mt: '1', maxW: '80%' })}>
            Focused modules on core tenets of machine learning.
          </p>
        </div>
        <button className={css({ 
          w: '6', h: '6', 
          borderRadius: 'full', 
          border: '1px solid white', 
          display: 'grid', placeItems: 'center', 
          color: 'white',
          cursor: 'pointer'
        })}>+</button>
      </div>

      {/* Grid of Dots (Centerpiece) */}
      <div className={flex({ gap: '4', wrap: 'wrap', flex: '1', justify: 'center', align: 'center' })}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={css({ 
            w: '12', h: '12', 
            borderRadius: 'full', 
            bg: i >= 9 ? 'white' : 'about.circle', 
            transition: 'opacity 0.2s',
            _hover: { opacity: 0.8 }
          })} />
        ))}
      </div>

      {/* Footer (Action Button) - FIXED THE TAGS HERE */}
      <button className={center({ 
        w: 'full',
        border: '1px solid rgba(255,255,255,0.3)',
        color: 'white',
        py: '3',
        borderRadius: 'full',
        mt: 'auto',
        fontSize: 'sm',
        cursor: 'pointer',
        _hover: { bg: 'rgba(255,255,255,0.05)' }
      })}>
        {stepText}
      </button> 
    </div>
  );
}