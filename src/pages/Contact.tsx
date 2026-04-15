import React from 'react';
import { css } from '../../styled-system/css';
import { flex, stack, container, center } from '../../styled-system/patterns';

// Sub-component for the stats to keep the main return clean
const StatBox = ({ number, label }: { number: string, label: string }) => (
  <div className={stack({ align: 'center', gap: '1', flex: '1', minW: '150px' })}>
    <span className={css({ 
      fontSize: { base: '4xl', md: '5xl' }, 
      fontWeight: 'bold',
      letterSpacing: 'tight'
    })}>
      {number}
    </span>
    <span className={css({ 
      fontSize: '10px', 
      color: 'white/50', 
      letterSpacing: '0.2em',
      textAlign: 'center'
    })}>
      {label}
    </span>
  </div>
);

const Contact = () => {
  return (
    <div className={css({ 
      bg: '#0A0A0A', 
      minH: '100vh', 
      color: 'white', 
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    })}>
      
      {/* 1. Background Grid Overlay */}
      <div className={css({
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        zIndex: 1
      })} />

      {/* 2. Brand Gradient Glow */}
      <div className={css({
        position: 'absolute',
        bottom: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(255, 77, 0, 0.4) 0%, rgba(255, 77, 0, 0) 70%)',
        filter: 'blur(80px)',
        zIndex: 2
      })} />

      {/* 3. Hero Content */}
      <main className={container({ 
        maxWidth: '1200px', 
        pt: { base: '24', md: '32' }, 
        pb: '24',
        position: 'relative',
        zIndex: 10
      })}>
        
        {/* Badge */}
        <div className={center({ mb: '8' })}>
          <span className={css({ 
            color: '#FF4D00', 
            fontSize: 'xs', 
            fontWeight: 'bold',
            letterSpacing: '0.3em',
            border: '1px solid',
            borderColor: 'white/10',
            px: '4', py: '1',
            borderRadius: 'sm'
          })}>
            [ MASTER AI NOW ]
          </span>
        </div>

        {/* Heading */}
        <h1 className={css({ 
          fontSize: { base: '4xl', md: '6xl', lg: '7xl' }, 
          fontWeight: '600', 
          lineHeight: '1.1',
          mb: '8',
          textAlign: 'center',
          maxWidth: '900px',
          mx: 'auto',
          letterSpacing: 'tight'
        })}>
          Learn Practical AI Skills <br /> 
          <span className={css({ color: 'white/90' })}>for Tomorrow</span>
        </h1>

        {/* Description */}
        <p className={css({ 
          color: 'white/60', 
          maxWidth: '580px', 
          mx: 'auto', 
          mb: '12',
          fontSize: { base: 'md', md: 'lg' },
          lineHeight: 'relaxed',
          textAlign: 'center'
        })}>
          A future-ready AI learning platform designed to help you understand, 
          build, and apply artificial intelligence in real-world scenarios.
        </p>

        {/* CTA */}
        <div className={center()}>
          <button className={css({ 
            bg: 'white', 
            color: 'black', 
            px: '10', py: '4', 
            borderRadius: 'full', 
            fontWeight: '800',
            fontSize: 'sm',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(255,255,255,0.2)',
            _hover: { 
              transform: 'translateY(-2px)',
              boxShadow: '0 0 30px rgba(255,255,255,0.4)'
            }
          })}>
            START LEARNING AI
          </button>
        </div>

        {/* Floating Asset: Left (Student) */}
        <div className={css({
          display: { base: 'none', xl: 'block' },
          position: 'absolute',
          top: '15%',
          left: '-5%',
          w: '220px', 
          aspectRatio: '4/3',
          bg: 'gray.900', 
          borderRadius: '2xl',
          overflow: 'hidden',
          border: '1px solid white/10',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          transform: 'rotate(-2deg)'
        })}>
          <img src="/person1.jpg" alt="Student" className={css({ w: 'full', h: 'full', objectFit: 'cover' })} />
        </div>

        {/* Floating Asset: Right (AI Brain) */}
        <div className={css({
          display: { base: 'none', xl: 'block' },
          position: 'absolute',
          top: '35%',
          right: '-5%',
          w: '200px', 
          aspectRatio: '4/3',
          bg: 'white/5', 
          borderRadius: '2xl',
          backdropFilter: 'blur(12px)',
          p: '3',
          border: '1px solid white/10',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          transform: 'rotate(2deg)'
        })}>
          <img src="/behindgirl.jpg" alt="AI Interface" className={css({ w: 'full', h: 'full', objectFit: 'cover', borderRadius: 'xl' })} />
        </div>

        {/* Stats Row */}
        <div className={flex({ 
          justify: 'center', 
          align: 'center',
          gap: { base: '8', md: '20' }, 
          mt: { base: '24', md: '40' },
          flexWrap: 'wrap',
          borderTop: '1px solid',
          borderColor: 'white/5',
          pt: '12'
        })}>
          <StatBox number="98%" label="COURSE COMPLETION" />
          <StatBox number="50+" label="AI MODULES" />
          <StatBox number="10K+" label="ACTIVE LEARNERS" />
        </div>
      </main>
    </div>
  );
};

export default Contact;