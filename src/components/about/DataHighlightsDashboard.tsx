import { css } from '../../../styled-system/css';
import { flex, stack, center } from '../../../styled-system/patterns';

export default function DataHighlightsDashboard() {
  return (
    <div className={css({
      minH: '100vh',
      bg: 'dash.bgGradient', // Applied the new smooth background gradient
      fontFamily: 'body',
      color: 'dash.textCharcoal',
      position: 'relative',
      overflow: 'hidden',
    })}>
      
      {/* 1. Header (Updated color to dark charcoal) */}
      <header className={flex({ justify: 'space-between', align: 'center', p: '6', lg: { px: '20' } })}>
        <div className={flex({ align: 'center', gap: '2' })}>
          <div className={css({ color: 'dash.textCharcoal', fontSize: '2xl' })}>✦</div>
          <span className={css({ textTransform: 'uppercase', color: 'dash.textCharcoal', fontSize: 'xs', letterSpacing: 'widest' })}>Your Logo</span>
        </div>
        
        {/* Navigation Items (Links removed to match request) */}
        <div className={flex({ gap: '8', align: 'center', display: { base: 'none', md: 'flex' } })}>
          <button className={center({ border: '1px solid currentColor', borderRadius: 'full', w: '8', h: '8' })}>
            ☰
          </button>
        </div>
      </header>

      {/* 2. Main Responsive Grid/Layout Container */}
      <main className={css({
        p: { base: '6', lg: '12' },
        pt: '0',
        color: 'dash.textCharcoal',
        display: { base: 'stack', lg: 'grid' },
        gridTemplateColumns: { lg: '1.2fr 1fr 1fr' }, // Defines the 3 columns exactly as in image
        gap: '12',
        alignItems: 'start',
      })}>
        
        {/* LEFT COLUMN: Main Typography and Sub-panels */}
        <div className={stack({ gap: '12', pr: { lg: '10' } })}>
          {/* Main Heading/Paragraph Copy */}
          <div className={stack({ gap: '4' })}>
            <h1 className={css({ fontSize: { base: '4xl', lg: '6xl' }, fontWeight: 'bold', lineHeight: '1.1' })}>
              AI Course Data Highlights
            </h1>
            <p className={css({ fontSize: 'sm', maxW: '2xl', color: 'dash.textCharcoal/80' })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Sub-cards on Left */}
          <div className={flex({ direction: { base: 'column', md: 'row' }, gap: '6', alignItems: 'stretch' })}>
            {/* Small ~78M Dark Panel */}
            <DashboardPanel>
              <span className={css({ fontSize: '4xl', fontWeight: 'bold' })}>~78M</span>
              <p className={css({ fontSize: 'xs', fontWeight: 'bold', textTransform: 'uppercase', color: 'white' })}>Lorem Ipsum Dolor</p>
              <p className={css({ fontSize: 'xs', color: 'white/70' })}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </DashboardPanel>
            
            {/* Middle Image Card (User Profile Mock) */}
            <div className={css({ flex: '1.2', bg: 'white', border: '1px solid token(colors.dash.panelBorder)', borderRadius: '2xl', overflow: 'hidden', boxShadow: 'sm' })}>
              <div className={css({ w: 'full', h: '160px', bg: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
                <img src="/dashboard-mock-1.jpg" alt="A dashboard visualization" className={css({ objectFit: 'cover', w: 'full', h: 'full' })} />
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: Tall "12X" Panel */}
        <div className={css({ flex: '1', minH: '500px' })}>
          <DashboardPanel titleIcon="📚" height="full">
            <span className={css({ fontSize: '5xl', fontWeight: 'bold' })}>12X</span>
            <div className={stack({ gap: '1', mt: '3' })}>
               <p className={css({ fontSize: 'xs', fontWeight: 'bold', textTransform: 'uppercase', color: 'white' })}>Lorem Ipsum Dolor</p>
               <p className={css({ fontSize: 'xs', color: 'white/70' })}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          </DashboardPanel>
        </div>

        {/* RIGHT COLUMN: Stack of Panels */}
        <div className={stack({ flex: '1', gap: '6' })}>
          {/* Top Code-Visual Mock Card */}
          <div className={css({ flex: '1', bg: 'white', borderRadius: '3xl', overflow: 'hidden', boxShadow: 'md' })}>
            <div className={css({ w: 'full', h: '180px', bg: '#ccc' })}>
              <img src="/dashboard-mock-2.jpg" alt="A code visualization" className={css({ objectFit: 'cover', w: 'full', h: 'full' })} />
            </div>
          </div>

          {/* Bottom "10,000+" Graph Panel */}
          <DashboardPanel graphType="AI Counting Format">
            {/* Minimal SVG Waveform Placeholder exactly as in image_6.png */}
            <div className={center({ py: '4' })}>
              <svg width="240" height="60" viewBox="0 0 240 60" fill="none" stroke="white" strokeWidth="2">
                <path d="M0 30 C 20 50, 40 10, 60 40 S 80 50, 100 20 S 120 60, 140 30 S 160 10, 180 50 S 200 60, 220 30 S 240 50, 260 30" strokeLinecap="round" />
              </svg>
            </div>
            <div className={flex({ justify: 'flex-start', align: 'center', gap: '3', mt: '2' })}>
              <span className={css({ fontSize: '4xl', fontWeight: 'bold' })}>10,000+</span>
            </div>
          </DashboardPanel>
        </div>

      </main>
    </div>
  );
}

/**
 * A reusable Component for the Dark Green Dashboard Panels.
 * Achieves the precise visual look by abstracting common styles.
 */
function DashboardPanel({ children, height = 'auto', graphType, titleIcon }: { children: React.ReactNode, height?: string, graphType?: string, titleIcon?: string }) {
  return (
    <div className={stack({
      flex: '1',
      bg: 'dash.darkGreenGradient', // Applied the new dark green gradient
      p: '8',
      color: 'white',
      borderRadius: '3xl',
      border: '1px solid token(colors.dash.panelBorder)', // Added the translucent white border
      boxShadow: 'xl',
      _hover: { transform: 'translateY(-5px)', transition: 'transform 0.2s ease' },
      justify: 'center',
      minH: height === 'full' ? 'auto' : '220px',
      h: height === 'full' ? '100%' : 'auto',
      position: 'relative' // Context for floaties if needed
    })}>
      {/* Title/Icon Row (Centered to content but abstract enough for flexibility) */}
      { (graphType || titleIcon) && (
        <div className={flex({ justify: 'space-between', align: 'center', mb: 'auto' })}>
          {graphType && <div className={css({ fontSize: '10px', p: '2px 8px', border: '1px solid white/30', color: 'white/70', borderRadius: 'full' })}>
            {graphType}
          </div>}
          {titleIcon && <div className={center({ w: '8', h: '8', color: 'white/70', fontSize: 'xl' })}>{titleIcon}</div>}
        </div>
      )}
      
      {/* Dynamic Content */}
      <div className={stack({ gap: '2', mt: (graphType || titleIcon) ? 'auto' : '0' })}>
        {children}
      </div>
    </div>
  );
}