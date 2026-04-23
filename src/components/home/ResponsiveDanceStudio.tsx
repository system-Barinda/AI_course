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