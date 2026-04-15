import React from 'react';
import { css } from '../../styled-system/css';
import { flex, stack, container } from '../../styled-system/patterns';

const Contact = () => {
  return (
    <div className={css({ 
      bg: 'linear-gradient(142deg, #01130f 60%, #0e4235 50%)', 
      minH: '100vh', 
      color: 'white', 
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden'
    })}>

      {/* Hero Section */}
      <main className={container({ 
        maxWidth: '1200px', 
        pt: { base: '20', md: '32' }, 
        pb: '20', 
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      })}>
        
        <p className={css({ color: 'brand', fontSize: 'xs', mb: '6', letterSpacing: '0.2em' })}>
          [ MASTER AI NOW ]
        </p>

        <h1 className={css({ 
          fontSize: { base: '4xl', md: '7xl' }, 
          fontWeight: '600', 
          lineHeight: '1.1',
          mb: '8',
          maxWidth: '900px',
          mx: 'auto'
        })}>
          Learn Practical AI Skills <br /> for Tomorrow
        </h1>

        <p className={css({ 
          color: 'gray.400', 
          maxWidth: '600px', 
          mx: 'auto', 
          mb: '10',
          lineHeight: 'relaxed' 
        })}>
          A future-ready AI learning platform designed to help you understand, build, and apply artificial intelligence in real-world scenarios.
        </p>

        <button className={css({ 
          bg: 'white', 
          color: 'black', 
          px: '8', py: '4', 
          borderRadius: 'full', 
          fontWeight: 'bold',
          transition: 'transform 0.2s',
          _hover: { transform: 'scale(1.05)' }
        })}>
          START LEARNING AI
        </button>

        {/* Floating Images (Simplified for structure) */}
        <div className={css({
          display: { base: 'none', lg: 'block' },
          position: 'absolute',
          top: '20%',
          left: '5%',
          w: '200px', h: '150px',
          bg: 'gray.800', borderRadius: 'xl',
          overflow: 'hidden',
          boxShadow: '2xl'
        })}>
          <img src="/person1.jpg" alt="Student" />
        </div>

        <div className={css({
          display: { base: 'none', lg: 'block' },
          position: 'absolute',
          top: '40%',
          right: '5%',
          w: '180px', h: '140px',
          bg: 'white/10', borderRadius: 'xl',
          backdropFilter: 'blur(10px)',
          p: '4'
        })}>
          <img src="/behindgirl.jpg" alt="Brain AI" className={css({ borderRadius: 'lg' })} />
        </div>

        {/* Stats Section */}
        <div className={flex({ 
          justify: 'center', 
          gap: { base: '12', md: '24' }, 
          mt: { base: '32', md: '48' },
          flexWrap: 'wrap'
        })}>
          <StatBox number="98%" label="COURSE COMPLETION" />
          <StatBox number="50+" label="AI MODULES" />
          <StatBox number="10K+" label="ACTIVE LEARNERS" />
        </div>
      </main>
    </div>
  );
};

const StatBox = ({ number, label }: { number: string, label: string }) => (
  <div className={stack({ align: 'center', gap: '2' })}>
    <span className={css({ fontSize: '5xl', fontWeight: 'bold' })}>{number}</span>
    <span className={css({ fontSize: 'xs', color: 'gray.500', letterSpacing: 'widest' })}>{label}</span>
  </div>
);

export default Contact;