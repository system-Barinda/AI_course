import { css } from '../styled-system/css';
import { flex, stack, center } from '../styled-system/patterns';

export default function LearnWithExpertsSection() {
  return (
    <div className={css({
      minH: '100vh',
      bg: 'expert.bgGradient', // Applied the new light gradient background
      fontFamily: 'body',
      color: 'expert.textCharcoal',
      position: 'relative',
      overflow: 'hidden',
    })}>
      
      {/* 1. Header (Updated text color to charcoal) */}
      <header className={flex({ justify: 'space-between', align: 'center', p: '6', lg: { px: '20' } })}>
        <div className={flex({ align: 'center', gap: '2' })}>
          <div className={css({ color: 'expert.textCharcoal', fontSize: '2xl' })}>✦</div>
          <span className={css({ textTransform: 'uppercase', color: 'expert.textCharcoal', fontSize: 'xs', letterSpacing: 'widest' })}>Your Logo</span>
        </div>
        
        {/* Navigation Items */}
        <div className={flex({ gap: '8', align: 'center', display: { base: 'none', md: 'flex' } })}>
          <a href="#" className={css({ border: '1px solid currentColor', px: '4', py: '1', borderRadius: 'full', fontSize: 'sm' })}>ABOUT US</a>
          <a href="#" className={css({ fontSize: 'sm' })}>PRODUCT</a>
          <a href="#" className={css({ fontSize: 'sm' })}>CONTACT US</a>
          <button className={center({ border: '1px solid currentColor', borderRadius: 'full', w: '8', h: '8' })}>
            ☰
          </button>
        </div>
      </header>

      {/* 2. Main Content Container */}
      <main className={flex({ 
        direction: { base: 'column', lg: 'row' }, 
        p: { base: '6', lg: '12' },
        pt: '0',
        gap: '12',
        alignItems: { base: 'center', lg: 'stretch' }
      })}>
        
        {/* Left Side: Text and Laptop Mockup */}
        <div className={stack({ flex: '1.2', gap: '8', pr: { lg: '10' } })}>
          <div className={stack({ gap: '4' })}>
            <h1 className={css({ fontSize: { base: '4xl', lg: '6xl' }, fontWeight: 'bold' })}>
              Learn with Experts
            </h1>
            <p className={css({ fontSize: 'sm', maxW: '2xl', color: 'expert.textCharcoal/80' })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Large Laptop Mockup */}
          <div className={css({ 
            width: '100%', 
            bg: 'expert.input', // Mock dark color for the device frame
            aspectRatio: '16/10',
            borderRadius: '2xl',
            overflow: 'hidden',
            boxShadow: 'xl',
            border: '8px solid #333' // Added a slight bezel for realism
          })}>
            {/* The internal image placeholder */}
            <div className={css({ w: 'full', h: 'full', bg: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
              <img src="/mock-laptop-interior.jpg" alt="A person working on a laptop" className={css({ objectFit: 'cover', w: 'full', h: 'full' })} />
            </div>
          </div>
        </div>

        {/* Right Side: The Complex "AI: COURSEME" Chat Panel */}
        <div className={flex({ 
          flex: '1',
          bg: 'expert.aiChat.gradient', // Applied the dark green gradient
          p: '8',
          borderRadius: '3xl',
          color: 'white',
          boxShadow: '2xl',
          minW: { lg: '400px' }, // Maintain density on large screens
          minH: '600px', // Ensure the chat panel has vertical presence
          direction: 'column',
          gap: '8',
          position: 'relative', // Context for absolute items if needed
          _hover: { transform: 'translateY(-5px)', transition: 'transform 0.2s ease' }
        })}>
          {/* Panel Header */}
          <div className={flex({ justify: 'space-between', align: 'center' })}>
            <div className={stack({ gap: '0' })}>
              <span className={css({ fontSize: 'lg', fontWeight: 'bold' })}>AI: COURSEME</span>
              <span className={css({ fontSize: 'xs', color: 'expert.aiChat.userText/60' })}>AI Co-pilot</span>
            </div>
            <div className={flex({ gap: '3' })}>
              <button className={css({ fontSize: 'xs', px: '3', py: '1', border: '1px solid currentColor', borderRadius: 'full' })}>Sign Up</button>
              <button className={css({ fontSize: 'xs', px: '3', py: '1', border: '1px solid currentColor', borderRadius: 'full' })}>Login</button>
            </div>
          </div>

          {/* Chat Bubble 1: AI (Left-aligned, Avatar + White Bubble) */}
          <div className={flex({ gap: '4', align: 'flex-start' })}>
            <div className={css({ w: '12', h: '12', bg: 'white', borderRadius: 'full', overflow: 'hidden' })}>
              <img src="/mock-avatar-ai.png" className={css({ w: 'full', h: 'full', objectFit: 'cover' })} alt="AI Avatar" />
            </div>
            <div className={stack({ 
              bg: 'white', 
              p: '4', 
              borderRadius: '2xl', 
              color: 'black', 
              maxW: 'md' 
            })}>
              <p className={css({ fontSize: 'sm', fontWeight: 'semibold' })}>What do you want?</p>
            </div>
          </div>

          {/* Chat Bubble 2: User (Right-aligned, Avatar + Glass Bubble) */}
          <div className={flex({ gap: '4', align: 'flex-end', justify: 'flex-end' })}>
            <div className={stack({ 
              bg: 'expert.aiChat.userBubble', // The transparent glass bubble style
              p: '4', 
              borderRadius: '2xl', 
              color: 'expert.aiChat.userText', 
              maxW: 'md' 
            })}>
              <p className={css({ fontSize: 'xs' })}>Tell me about it</p>
            </div>
            <div className={css({ w: '10', h: '10', bg: 'expert.input', borderRadius: 'full', overflow: 'hidden', mb: '1' })}>
               <img src="/mock-avatar-user.png" className={css({ w: 'full', h: 'full', objectFit: 'cover' })} alt="User Avatar" />
            </div>
          </div>

          {/* Chat Bubble 3: Subheadline (Complex: Left-aligned, Large Bubble + Text) */}
          <div className={flex({ gap: '4', align: 'flex-start' })}>
            <div className={css({ w: '12', h: '12', bg: 'white', borderRadius: 'full', overflow: 'hidden' })}>
              <img src="/mock-avatar-ai.png" className={css({ w: 'full', h: 'full', objectFit: 'cover' })} alt="AI Avatar" />
            </div>
            <div className={stack({ 
              bg: 'white', 
              p: '6', 
              borderRadius: '3xl', 
              color: 'black', 
              gap: '2',
              maxW: 'md' 
            })}>
              <p className={css({ fontSize: 'md', fontWeight: 'semibold' })}>Subheadline</p>
              <p className={css({ fontSize: 'xs', color: 'black/70' })}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Footer Input Area (Pushed to bottom using mt: 'auto') */}
          <div className={flex({ 
            bg: 'expert.input', 
            mt: 'auto', 
            p: '3', 
            borderRadius: 'full', 
            align: 'center', 
            gap: '3',
            color: 'expert.aiChat.userText'
          })}>
            <div className={center({ w: '6', h: '6', color: 'expert.aiChat.userText' })}>🔍</div>
            <input 
              type="text" 
              placeholder="Write Your Text" 
              className={css({ 
                flex: '1', 
                bg: 'transparent', 
                fontSize: 'sm', 
                border: 'none', 
                outline: 'none',
                color: 'expert.aiChat.userText',
                _placeholder: { color: 'expert.aiChat.userText/60' }
              })} 
            />
            <div className={center({ w: '6', h: '6', color: 'expert.aiChat.userText' })}>🎙️</div>
          </div>
        </div>
      </main>
    </div>
  );
}