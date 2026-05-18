import React from 'react'
import { css } from '../../../styled-system/css'

function HeroSection() {
  return (
    <section
      className={css({
        minH: '100vh',
        bg: 'black',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      })}
    >
      {/* Glow Effects */}
      <div
        className={css({
          position: 'absolute',
          width: '450px',
          height: '450px',
          bg: '#c6ff00',
          borderRadius: '50%',
          filter: 'blur(140px)',
          opacity: 0.25,
          top: '-100px',
          left: '120px',
          zIndex: 1,
        })}
      />

      <div
        className={css({
          position: 'absolute',
          width: '500px',
          height: '500px',
          bg: '#c6ff00',
          borderRadius: '50%',
          filter: 'blur(140px)',
          opacity: 0.2,
          bottom: '-150px',
          right: '-100px',
          zIndex: 1,
        })}
      />

      {/* Navbar */}
      <nav
        className={css({
          width: '100%',
          px: { base: '25px', md: '70px' },
          py: '25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { base: 'column', md: 'row' },
          gap: { base: '20px', md: '0px' },
          position: 'relative',
          zIndex: 10,
        })}
      >
        <div
          className={css({
            fontSize: '32px',
            fontWeight: '900',
            color: '#d7ff00',
            letterSpacing: '2px',
          })}
        >
          IPSUM
        </div>

        <ul
          className={css({
            display: 'flex',
            gap: { base: '20px', md: '40px' },
            listStyle: 'none',
            flexWrap: 'wrap',
            justifyContent: 'center',
          })}
        >
          {['Services', 'Work', 'Process', 'About'].map((item) => (
            <li
              key={item}
              className={css({
                textTransform: 'uppercase',
                fontSize: '14px',
                color: '#cfcfcf',
                cursor: 'pointer',
                transition: '0.3s',
                _hover: {
                  color: '#d7ff00',
                },
              })}
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          className={css({
            bg: '#d7ff00',
            color: 'black',
            border: 'none',
            px: '24px',
            py: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s',
            _hover: {
              transform: 'translateY(-2px)',
            },
          })}
        >
          START PROJECT
        </button>
      </nav>

      {/* Hero Content */}
      <div
        className={css({
          width: '100%',
          px: { base: '25px', md: '70px' },
          py: { base: '40px', md: '70px' },
          display: 'flex',
          flexDirection: { base: 'column', lg: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '60px',
          position: 'relative',
          zIndex: 10,
        })}
      >
        {/* Left Side */}
        <div
          className={css({
            maxW: '650px',
          })}
        >
          <h1
            className={css({
              fontSize: { base: '48px', md: '88px' },
              lineHeight: 0.95,
              fontWeight: '900',
            })}
          >
            WE BUILD <br />
            BRANDS <br />
            THAT <span style={{ color: '#d7ff00' }}>DOMINATE</span>
          </h1>

          <p
            className={css({
              mt: '30px',
              color: '#b0b0b0',
              lineHeight: 1.8,
              fontSize: '16px',
              maxW: '550px',
            })}
          >
            Data-driven strategies, bold creative, and performance marketing
            that scales your business beyond expectations.
            <br />
            No fluff. Just results.
          </p>

          <div
            className={css({
              display: 'flex',
              flexDirection: { base: 'column', sm: 'row' },
              gap: '20px',
              mt: '40px',
            })}
          >
            <button
              className={css({
                bg: '#d7ff00',
                color: 'black',
                border: 'none',
                px: '24px',
                py: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              })}
            >
              GET FREE STRATEGY CALL
            </button>

            <button
              className={css({
                bg: 'transparent',
                color: 'white',
                border: '1px solid #333',
                px: '24px',
                py: '16px',
                cursor: 'pointer',
                transition: '0.3s',
                _hover: {
                  borderColor: '#d7ff00',
                  color: '#d7ff00',
                },
              })}
            >
              VIEW OUR WORK →
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            width: { base: '100%', lg: 'auto' },
          })}
        >
          {[
            {
              title: '500+',
              subtitle: 'CAMPAIGNS LAUNCHED',
              color: '#d7ff00',
            },
            {
              title: '12X',
              subtitle: 'AVERAGE ROI DELIVERED',
              color: '#ff5c00',
            },
            {
              title: '98%',
              subtitle: 'CLIENT RETENTION RATE',
              color: '#d7ff00',
            },
          ].map((item) => (
            <div
              key={item.title}
              className={css({
                borderLeft: `4px solid ${item.color}`,
                pl: '20px',
              })}
            >
              <h2
                className={css({
                  fontSize: { base: '42px', md: '60px' },
                  mb: '8px',
                  fontWeight: 'bold',
                })}
              >
                {item.title}
              </h2>

              <p
                className={css({
                  color: '#999',
                  fontSize: '13px',
                  letterSpacing: '1px',
                })}
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={css({
          width: '100%',
          bg: '#d7ff00',
          color: 'black',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          py: '20px',
          px: '10px',
          fontWeight: 'bold',
          fontSize: { base: '12px', md: '14px' },
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
        })}
      >
        <span>PERFORMANCE MARKETING</span>
        <span>BRAND STRATEGY</span>
        <span>PAID SOCIAL</span>
        <span>SEO & CONTENT</span>
        <span>CREATIVE DIRECTION</span>
        <span>WEB DESIGN</span>
      </div>
    </section>
  )
}

export default HeroSection
