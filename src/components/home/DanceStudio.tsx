// DanceStudio.tsx

import { css } from "../../../styled-system/css";
import {
  Flex,
  Text,
  Button,
  Container,
  Grid,
  Stack,
  Heading,
} from "../../../styled-system/jsx";

const DanceStudio = () => {
  return (
    <div
      className={css({
        minH: "100vh",
        bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        position: "relative",
        overflowX: "hidden",
      })}
    >
      {/* Background Pattern */}
      <div
        className={css({
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        })}
      />

      {/* NAVBAR */}
      <nav
        className={css({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          py: { base: 4, md: 6 },
          px: { base: 4, md: 8, lg: 12 },
          backdropFilter: "blur(10px)",
          bg: "rgba(0,0,0,0.3)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        })}
      >
        <Flex justify="space-between" align="center" maxW="1400px" mx="auto">
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            className={css({
              background: "linear-gradient(90deg, #ff6b6b, #ffd93d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            DANCE STUDIO
          </Text>

          <Flex gap={{ base: 4, md: 8 }} display={{ base: "none", md: "flex" }}>
            {["ABOUT", "SCHEDULE", "ARTIST", "LOCAL"].map((item) => (
              <Text
                key={item}
                fontSize="sm"
                cursor="pointer"
                className={css({
                  _hover: { color: "#ffd93d" },
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
              borderColor: "#ffd93d",
              color: "#ffd93d",
              _hover: { bg: "#ffd93d", color: "#000" },
            })}
          >
            MENU
          </Button>
        </Flex>
      </nav>

      {/* MAIN CONTENT */}
      <Container
        maxW="1400px"
        mx="auto"
        px={{ base: 4, md: 6, lg: 8 }}
        pt={{ base: 24, md: 32, lg: 40 }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 8, lg: 12 }}
          alignItems="center"
        >
          {/* LEFT */}
          <Stack gap={{ base: 4, md: 6 }}>
            <Text color="#ffd93d" fontWeight="semibold">
              AFROBEAT DANCE
            </Text>

            <Heading
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              lineHeight="1.1"
            >
              AfeN Wahid
            </Heading>

            <Text color="gray.400" maxW="600px">
              Discover rhythm, movement, and culture through dance. Join a
              community of passionate learners and grow your talent.
            </Text>

            {/* STATS */}
            <Flex gap={{ base: 6, md: 8 }}>
              <Stack>
                <Heading color="#ffd93d">300+</Heading>
                <Text fontSize="sm" color="gray.500">
                  Nights/show
                </Text>
              </Stack>

              <Stack>
                <Heading color="#ffd93d">120K+</Heading>
                <Text fontSize="sm" color="gray.500">
                  Students
                </Text>
              </Stack>

              <Button
                variant="ghost"
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  _hover: { color: "#ffd93d" },
                })}
              >
                <div
                  className={css({
                    w: 10,
                    h: 10,
                    borderRadius: "full",
                    bg: "#ffd93d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  })}
                >
                  ▶
                </div>
                Watch
              </Button>
            </Flex>
          </Stack>

          {/* RIGHT */}
          <Flex justify="center">
            <div
              className={css({
                w: "300px",
                h: "300px",
                bg: "linear-gradient(135deg, #ff6b6b, #ffd93d)",
                borderRadius: "full",
                opacity: 0.7,
              })}
            />
          </Flex>
        </Grid>

        {/* FOOTER */}
        <Flex
          justify="space-between"
          align="center"
          mt={20}
          pt={6}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          <Text fontWeight="bold">DANCE STUDIO</Text>

          <Flex gap={4}>
            {["Instagram", "Twitter", "YouTube"].map((s) => (
              <Text
                key={s}
                cursor="pointer"
                className={css({
                  _hover: { color: "#ffd93d" },
                })}
              >
                {s}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default DanceStudio;