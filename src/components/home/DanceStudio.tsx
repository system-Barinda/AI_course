// DanceStudio.tsx
import { Container, Stack, Heading, Text, Button, Flex, Grid } from '../../styled-system/jsx';
import { css } from '../../styled-system/css';
import { useState } from 'react';

const DanceStudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={css({ 
      minH: '100vh',
      bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      position: 'relative',
      overflowX: 'hidden',
    })}>
      
      {/* Background Pattern */}
      <div className={css({
        position: 'absolute',
        inset: 0,
        opacity: 0.05,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      })} />

      {/* Navigation */}
      <nav className={css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        py: { base: 4, md: 6 },
        px: { base: 4, md: 8, lg: 12 },
        backdropFilter: 'blur(10px)',
        bg: 'rgba(0,0,0,0.3)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      })}>
        <Flex justify="space-between" align="center" maxW="1400px" mx="auto">
          <Text 
            fontSize={{ base: '2xl', md: '3xl' }} 
            fontWeight="bold"
            bgGradient="linear(to-r, #ff6b6b, #ffd93d)"
            bgClip="text"
            letterSpacing="tight"
          >
            DANCE STUDIO
          </Text>
          
          <Flex gap={{ base: 4, md: 8 }} display={{ base: 'none', md: 'flex' }}>
            {['ABOUT', 'SCHEDULE', 'ARTIST', 'LOCAL'].map((item) => (
              <Text 
                key={item} 
                fontSize="sm" 
                fontWeight="medium"
                cursor="pointer"
                transition="color 0.3s"
                className={css({
                  _hover: { color: '#ffd93d' }
                })}
              >
                {item}
              </Text>
            ))}
          </Flex>
          
          <Button 
            size="sm" 
            variant="outline"
            className={css({
              borderColor: '#ffd93d',
              color: '#ffd93d',
              _hover: { bg: '#ffd93d', color: '#000' }
            })}
          >
            MENU
          </Button>
        </Flex>
      </nav>

      {/* Main Content */}
      <Container maxW="1400px" mx="auto" px={{ base: 4, md: 6, lg: 8 }} pt={{ base: 24, md: 32, lg: 40 }}>
        <Grid 
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }} 
          gap={{ base: 8, lg: 12 }}
          alignItems="center"
        >
          
          {/* Left Column - Text Content */}
          <Stack gap={{ base: 4, md: 6 }}>
            <Text 
              fontSize={{ base: 'lg', md: 'xl' }} 
              color="#ffd93d" 
              fontWeight="semibold"
              letterSpacing="wider"
            >
              AFROBEAT DANCE
            </Text>
            
            <Heading 
              as="h1" 
              fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
              fontWeight="bold"
              lineHeight="1.1"
              letterSpacing="tight"
            >
              AfeN Wahid
            </Heading>
            
            <Text 
              fontSize={{ base: 'md', md: 'lg' }} 
              color="gray.400"
              lineHeight="1.6"
              maxW="600px"
            >
              Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do
            </Text>
            
            {/* Stats Section */}
            <Flex gap={{ base: 6, md: 8 }} mt={{ base: 2, md: 4 }}>
              <Stack gap={1}>
                <Heading as="h3" fontSize={{ base: '3xl', md: '4xl' }} color="#ffd93d">
                  300+
                </Heading>
                <Text fontSize="sm" color="gray.500">Nights/show</Text>
              </Stack>
              
              <Stack gap={1}>
                <Heading as="h3" fontSize={{ base: '3xl', md: '4xl' }} color="#ffd93d">
                  120K+
                </Heading>
                <Text fontSize="sm" color="gray.500">Students</Text>
              </Stack>
              
              <Button
                variant="ghost"
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  color: 'white',
                  _hover: { color: '#ffd93d' }
                })}
              >
                <div className={css({
                  w: 12,
                  h: 12,
                  borderRadius: 'full',
                  bg: '#ffd93d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s',
                  _hover: { transform: 'scale(1.1)' }
                })}>
                  <span className={css({ fontSize: 20, color: '#000' })}>▶</span>
                </div>
                Watch video
              </Button>
            </Flex>
          </Stack>
          
          {/* Right Column - Visual Element (Dancer silhouette or image) */}
          <Flex justify="center" align="center" position="relative">
            <div className={css({
              position: 'relative',
              width: '100%',
              maxW: '500px',
              aspectRatio: '1',
            })}>
              {/* Abstract dance figure using CSS shapes */}
              <div className={css({
                position: 'absolute',
                inset: 0,
                bg: 'linear-gradient(135deg, #ff6b6b, #ffd93d)',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'morph 8s ease-in-out infinite',
                opacity: 0.3,
              })} />
              
              <div className={css({
                position: 'absolute',
                inset: '20%',
                bg: 'linear-gradient(135deg, #ffd93d, #ff6b6b)',
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                animation: 'morph 8s ease-in-out infinite reverse',
                opacity: 0.5,
              })} />
              
              {/* Dancer silhouette */}
              <svg
                viewBox="0 0 400 400"
                className={css({
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.5))',
                })}
              >
                <path
                  fill="#ffd93d"
                  d="M200 80c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm-60 120c-11 0-20 9-20 20v60c0 11 9 20 20 20h40v60c0 11 9 20 20 20s20-9 20-20v-60h40c11 0 20-9 20-20v-60c0-11-9-20-20-20h-120z"
                />
              </svg>
            </div>
          </Flex>
        </Grid>
        
        {/* Bottom Section - Dance Studio Title */}
        <Flex 
          justify="space-between" 
          align="center" 
          mt={{ base: 12, md: 20, lg: 32 }}
          pt={{ base: 6, md: 8 }}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          <Text 
            fontSize={{ base: 'xl', md: '2xl' }} 
            fontWeight="bold"
            letterSpacing="wider"
          >
            DANCE STUDIO
          </Text>
          
          <Flex gap={4}>
            {['Instagram', 'Twitter', 'YouTube'].map((social) => (
              <Text 
                key={social} 
                fontSize="sm" 
                cursor="pointer"
                className={css({
                  _hover: { color: '#ffd93d' }
                })}
              >
                {social}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Container>
      
      {/* Global styles for animations */}
      <style>{`
        @keyframes morph {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 40% 50%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
      `}</style>
    </div>
  );
};

export default DanceStudio;

// Alternative Mobile-First Responsive Component
import { Container, Stack, Flex, Grid, VStack, HStack } from '../../styled-system/jsx';
import { css } from '../../styled-system/css';

const ResponsiveDanceStudio = () => {
  return (
    <div className={css({ 
      minH: '100vh',
      bg: '#0a0a0a',
      position: 'relative',
    })}>
      
      {/* Mobile Menu Button - Visible only on mobile */}
      <div className={css({
        position: 'fixed',
        top: 4,
        right: 4,
        zIndex: 1000,
        display: { base: 'block', md: 'none' },
      })}>
        <button className={css({
          p: 3,
          bg: 'rgba(255,255,255,0.1)',
          borderRadius: 'lg',
          backdropFilter: 'blur(10px)',
        })}>
          <div className={css({ w: 6, h: 0.5, bg: 'white', mb: 1.5 })} />
          <div className={css({ w: 6, h: 0.5, bg: 'white', mb: 1.5 })} />
          <div className={css({ w: 6, h: 0.5, bg: 'white' })} />
        </button>
      </div>

      <Container px={{ base: 4, sm: 6, md: 8 }} pt={{ base: 20, md: 32 }}>
        <VStack gap={{ base: 8, md: 12 }} align="stretch">
          
          {/* Mobile-first typography */}
          <VStack gap={3} align={{ base: 'center', lg: 'start' }} textAlign={{ base: 'center', lg: 'left' }}>
            <Text 
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} 
              color="#ffd93d"
              fontWeight="semibold"
            >
              AFROBEAT DANCE
            </Text>
            
            <Heading 
              as="h1" 
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl', xl: '8xl' }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              AfeN Wahid
            </Heading>
            
            <Text 
              fontSize={{ base: 'sm', md: 'base', lg: 'lg' }}
              color="gray.400"
              maxW={{ base: '100%', lg: '80%' }}
              lineHeight="1.6"
            >
              Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              ut labore et dolore magna aliqua.
            </Text>
          </VStack>

          {/* Stats - Responsive grid layout */}
          <Grid 
            templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' }}
            gap={4}
            textAlign="center"
          >
            <VStack gap={1}>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="#ffd93d">300+</Heading>
              <Text fontSize="xs" color="gray.500">Nights/show</Text>
            </VStack>
            
            <VStack gap={1}>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color="#ffd93d">120K+</Heading>
              <Text fontSize="xs" color="gray.500">Students</Text>
            </VStack>
            
            <Flex justify="center" gridColumn={{ base: 'span 2', sm: 'span 1' }}>
              <Button variant="ghost" className={css({ display: 'flex', alignItems: 'center', gap: 2 })}>
                <div className={css({ w: 10, h: 10, borderRadius: 'full', bg: '#ffd93d', display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
                  ▶
                </div>
                <Text fontSize="sm">Watch</Text>
              </Button>
            </Flex>
          </Grid>

          {/* Visual element - Responsive sizing */}
          <Flex justify="center">
            <div className={css({
              w: { base: '200px', sm: '250px', md: '300px', lg: '400px' },
              h: { base: '200px', sm: '250px', md: '300px', lg: '400px' },
              bg: 'linear-gradient(135deg, #ff6b6b, #ffd93d)',
              borderRadius: 'full',
              opacity: 0.8,
            })} />
          </Flex>

          {/* Bottom navigation */}
          <Flex 
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between" 
            align="center"
            gap={4}
            pt={6}
            borderTop="1px solid rgba(255,255,255,0.1)"
          >
            <Text fontSize="sm" fontWeight="bold">DANCE STUDIO</Text>
            <Flex gap={4} flexWrap="wrap" justify="center">
              <Text fontSize="xs" cursor="pointer">Instagram</Text>
              <Text fontSize="xs" cursor="pointer">Twitter</Text>
              <Text fontSize="xs" cursor="pointer">YouTube</Text>
              <Text fontSize="xs" cursor="pointer">TikTok</Text>
            </Flex>
          </Flex>
          
        </VStack>
      </Container>
    </div>
  );
};