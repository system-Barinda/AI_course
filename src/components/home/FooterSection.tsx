import React from 'react'
import { css } from '../../../styled-system/css'
import {
  MapPin,
  Mail,
  Phone,
  Clock3,
} from 'lucide-react'

function FooterSection() {
  return (
    <footer
      className={css({
        bg: '#050505',
        color: 'white',
        overflow: 'hidden',
      })}
    >
      {/* CTA SECTION */}
      <section
        className={css({
          borderBottom: '1px solid #151515',
          py: { base: '70px', md: '110px' },
          px: '20px',
          position: 'relative',
          textAlign: 'center',
        })}
      >
        {/* Glow */}
        <div
          className={css({
            position: 'absolute',
            width: '350px',
            height: '350px',
            bg: '#d7ff00',
            borderRadius: '50%',
            filter: 'blur(130px)',
            opacity: 0.18,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          })}
        />

        <div
          className={css({
            position: 'relative',
            zIndex: 2,
            maxW: '700px',
            mx: 'auto',
          })}
        >
          <p
            className={css({
              color: '#d7ff00',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '12px',
              mb: '20px',
              fontWeight: 'bold',
            })}
          >
            Ready To Scale?
          </p>

          <h2
            className={css({
              fontSize: { base: '42px', md: '78px' },
              lineHeight: 0.95,
              fontWeight: '900',
              textTransform: 'uppercase',
            })}
          >
            LET'S BUILD <br />
            SOMETHING <br />
            <span style={{ color: '#d7ff00' }}>
              REMARKABLE
            </span>
          </h2>

          <p
            className={css({
              color: '#9f9f9f',
              mt: '30px',
              fontSize: '16px',
              lineHeight: 1.8,
              maxW: '600px',
              mx: 'auto',
            })}
          >
            Book a free 30-minute strategy call. We’ll audit your
            current marketing, find your biggest growth opportunities,
            and show you exactly how we’d scale them.
          </p>

          <button
            className={css({
              mt: '40px',
              bg: '#d7ff00',
              color: 'black',
              border: 'none',
              px: '28px',
              py: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s',
              _hover: {
                transform: 'translateY(-3px)',
              },
            })}
          >
            BOOK YOUR FREE STRATEGY CALL →
          </button>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section
        className={css({
          display: 'grid',
          gridTemplateColumns: {
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          borderBottom: '1px solid #151515',
        })}
      >
        {[
          {
            icon: <MapPin size={18} />,
            title: 'LOCATION',
            text: 'Kigali, Rwanda',
          },
          {
            icon: <Mail size={18} />,
            title: 'EMAIL',
            text: 'hello@ipsum.com',
          },
          {
            icon: <Phone size={18} />,
            title: 'PHONE',
            text: '+250 700 000 000',
          },
          {
            icon: <Clock3 size={18} />,
            title: 'RESPONSE TIME',
            text: 'Within 24 hours',
          },
        ].map((item) => (
          <div
            key={item.title}
            className={css({
              borderRight: {
                lg: '1px solid #151515',
              },
              borderBottom: {
                base: '1px solid #151515',
                lg: 'none',
              },
              py: '35px',
              px: '25px',
              textAlign: 'center',
            })}
          >
            <div
              className={css({
                color: '#d7ff00',
                mb: '15px',
                display: 'flex',
                justifyContent: 'center',
              })}
            >
              {item.icon}
            </div>

            <h4
              className={css({
                fontSize: '12px',
                color: '#8d8d8d',
                letterSpacing: '2px',
                mb: '10px',
              })}
            >
              {item.title}
            </h4>

            <p
              className={css({
                fontSize: '15px',
                color: 'white',
              })}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* FOOTER LINKS */}
      <section
        className={css({
          display: 'grid',
          gridTemplateColumns: {
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: '2fr 1fr 1fr 1fr',
          },
          gap: '40px',
          px: { base: '25px', md: '70px' },
          py: '70px',
          borderBottom: '1px solid #151515',
        })}
      >
        {/* Brand */}
        <div>
          <h2
            className={css({
              color: '#d7ff00',
              fontWeight: '900',
              fontSize: '32px',
              mb: '20px',
            })}
          >
            IPSUM
          </h2>

          <p
            className={css({
              color: '#8f8f8f',
              lineHeight: 1.8,
              maxW: '350px',
              fontSize: '15px',
            })}
          >
            A growth-focused digital marketing agency helping
            ambitious brands dominate their market through
            performance marketing and strategic creative.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3
            className={css({
              fontSize: '14px',
              mb: '20px',
              color: 'white',
              textTransform: 'uppercase',
            })}
          >
            Services
          </h3>

          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              color: '#8f8f8f',
              fontSize: '15px',
            })}
          >
            <p>Performance Marketing</p>
            <p>Brand Strategy</p>
            <p>Social Media Ads</p>
            <p>SEO & Content</p>
            <p>Creative Direction</p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3
            className={css({
              fontSize: '14px',
              mb: '20px',
              textTransform: 'uppercase',
            })}
          >
            Company
          </h3>

          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              color: '#8f8f8f',
              fontSize: '15px',
            })}
          >
            <p>About</p>
            <p>Case Studies</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Get Started */}
        <div>
          <h3
            className={css({
              fontSize: '14px',
              mb: '20px',
              textTransform: 'uppercase',
            })}
          >
            Get Started
          </h3>

          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              color: '#8f8f8f',
              fontSize: '15px',
            })}
          >
            <p>Free Strategy Call</p>
            <p>Marketing Audit</p>
            <p>Growth Plan</p>
            <p>Book Consultation</p>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section
        className={css({
          px: { base: '25px', md: '70px' },
          py: '25px',
          display: 'flex',
          flexDirection: { base: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
        })}
      >
        <p
          className={css({
            color: '#7a7a7a',
            fontSize: '14px',
            textAlign: { base: 'center', md: 'left' },
          })}
        >
          © 2026 IPSUM Agency. All rights reserved.
        </p>

        <div
          className={css({
            display: 'flex',
            gap: '15px',
          })}
        >
          {['FB', 'IG', 'LN'].map((item) => (
            <div
              key={item}
              className={css({
                width: '40px',
                height: '40px',
                border: '1px solid #202020',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d7ff00',
                cursor: 'pointer',
                transition: '0.3s',
                _hover: {
                  bg: '#d7ff00',
                  color: 'black',
                },
              })}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </footer>
  )
}

export default FooterSection