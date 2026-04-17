import { css } from '../../styled-system/css';
import { flex, stack, container } from '../../styled-system/patterns';
import image1 from "../../public/im1.png"
import InteractiveSection from "../components/home/InteractiveSection"

export default function HomePage() {
  return (
  <>
    <div className={css({
      minH: '100vh',
      bg: 'linear-gradient(135deg, #000000 0%, #0a2a22 50%, #154d3f 100%)',
      color: 'white',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden'
    })}>
      {/* Main Content */}
      <main className={flex({ 
        direction: { base: 'column', lg: 'row' },
        align: 'center',
        mt: '10',
        px: { base: '6', lg: '20' }
      })}>
        
        {/* Left Side: Device Mockup */}
        <div className={css({ flex: '1', position: 'relative' })}>
          <div className={css({
            aspectRatio: '16/10',
            bg: 'gray.800',
            borderRadius: 'xl',
            border: '8px solid #222',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          })}>
            <img 
              src={image1} 
              alt="AI Visualization" 
              className={css({ w: 'full', h: 'full', objectFit: 'cover' })} 
            />
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className={stack({ flex: '1', gap: '8', pl: { lg: '16' }, py: '10' })}>
          <header>
            <p className={css({ fontSize: '2xl', fontWeight: '300' })}>Welcome to the</p>
            <h1 className={css({ fontSize: { base: '2xl', lg: '3xl' }, fontWeight: '800', mt: '-2' })}>
              AI COURSE
            </h1>
            <h2 className={css({ fontSize: '4xl', color: 'gray.300', fontWeight: '300' })}>
              Learning Program
            </h2>
          </header>

          <div className={flex({ gap: '4' })}>
            <button className={css({ 
              border: '1px solid rgba(255,255,255,0.3)', 
              px: '6', py: '2', 
              borderRadius: 'full',
              bg: 'rgba(255,255,255,0.05)',
              _hover: { bg: 'rgba(255,255,255,0.1)' }
            })}>
              Artificial Intelligence Presentation
            </button>
            <button className={css({ 
              bg: 'rgba(255,255,255,0.2)', 
              px: '6', py: '2', 
              borderRadius: 'full',
              backdropFilter: 'blur(10px)'
            })}>
              Introduction
            </button>
          </div>

          {/* Bottom Feature Card */}
          <div className={flex({ 
            bg: 'rgba(255,255,255,0.05)', 
            p: '4', 
            borderRadius: '3xl', 
            border: '1px solid rgba(255,255,255,0.1)',
            align: 'center',
            gap: '6',
            maxW: 'md'
          })}>
            <div className={css({ w: '120px', h: '60px', borderRadius: 'xl', overflow: 'hidden' })}>
               <img src={image1} className={css({ w: 'full', h: 'full', objectFit: 'cover' })} />
            </div>
            <p className={css({ fontSize: 'sm', color: 'gray.300' })}>
              Discover the goals, structure, and long-term impact of AI integration.
            </p>
          </div>
        </div>
      </main>
    </div>
    
    <InteractiveSection />
    
  </>);
}