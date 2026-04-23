import { css } from '../../styled-system/css';
import { flex, stack } from '../../styled-system/patterns';

import InteractiveSection from "../components/home/InteractiveSection";
import HeroSectionHome from '../components/home/HeroSectionHome';
import DanceStudio from '../components/home/DanceStudio';

export default function HomePage() {
  return (
    <>
      <div
        className={css({
          minH: '100vh',
          bg: 'linear-gradient(135deg, #000000 0%, #0a2a22 50%, #154d3f 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        })}
      >
        {/* Main Content */}
        <main
          className={flex({
            direction: { base: 'column', lg: 'row' },
            align: 'center',
            justify: 'center',
            mt: '10',
            px: { base: '6', lg: '20' },
            gap: '10',
          })}
        >
          {/* Left Side: Image */}
          <div className={css({ flex: '1', position: 'relative', maxW: '600px' })}>
            <div
              className={css({
                aspectRatio: '16/10',
                bg: 'gray.800',
                borderRadius: 'xl',
                border: '8px solid #222',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              })}
            >
              {/* ✅ FIXED IMAGE PATH */}
              <img
                src="/im1.png"
                alt="AI Visualization"
                className={css({
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                })}
              />
            </div>
          </div>

          {/* Right Side */}
          <div
            className={stack({
              flex: '1',
              gap: '8',
              pl: { lg: '16' },
              py: '10',
              maxW: '500px',
            })}
          >
            <header>
              <p className={css({ fontSize: '2xl', fontWeight: '300' })}>
                Welcome to the
              </p>

              <h1
                className={css({
                  fontSize: { base: '2xl', lg: '3xl' },
                  fontWeight: '800',
                  mt: '-2',
                })}
              >
                AI COURSE
              </h1>

              <h2
                className={css({
                  fontSize: '4xl',
                  color: 'gray.300',
                  fontWeight: '300',
                })}
              >
                Learning Program
              </h2>
            </header>

            {/* Buttons */}
            <div className={flex({ gap: '4', wrap: 'wrap' })}>
              <button
                type="button"
                className={css({
                  border: '1px solid rgba(255,255,255,0.3)',
                  px: '6',
                  py: '2',
                  borderRadius: 'full',
                  bg: 'rgba(255,255,255,0.05)',
                  transition: '0.3s',
                  _hover: {
                    bg: 'rgba(255,255,255,0.15)',
                  },
                })}
              >
                Artificial Intelligence Presentation
              </button>

              <button
                type="button"
                className={css({
                  bg: 'rgba(255,255,255,0.2)',
                  px: '6',
                  py: '2',
                  borderRadius: 'full',
                  backdropFilter: 'blur(10px)',
                  transition: '0.3s',
                  _hover: {
                    bg: 'rgba(255,255,255,0.3)',
                  },
                })}
              >
                Introduction
              </button>
            </div>

            {/* Feature Card */}
            <div
              className={flex({
                bg: 'rgba(255,255,255,0.05)',
                p: '4',
                borderRadius: '3xl',
                border: '1px solid rgba(255,255,255,0.1)',
                align: 'center',
                gap: '6',
              })}
            >
              <div
                className={css({
                  width: '120px',
                  height: '60px',
                  borderRadius: 'xl',
                  overflow: 'hidden',
                })}
              >
                {/* ✅ FIXED IMAGE */}
                <img
                  src="/im1.png"
                  alt="feature"
                  className={css({
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  })}
                />
              </div>

              <p className={css({ fontSize: 'sm', color: 'gray.300' })}>
                Discover the goals, structure, and long-term impact of AI integration.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Sections */}
      <InteractiveSection />
      <HeroSectionHome />
      <DanceStudio />
    </>
  );
}