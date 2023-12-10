"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll } from "framer-motion";
import { Box, Button, Grid, Image, Text } from "@mantine/core";

const MainSection = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Box py="8%">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-green-500 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      <Grid grow justify="center" align="stretch">
        <Grid.Col span={{ base: 7, md: 5, lg: 9 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text>
              <TypeAnimation
                sequence={["Marcell", 1000, "Full-stack Dev", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ fontSize: "90px" }}
              />
            </Text>
            <Text mb={6}>
              Amante de Linux e Criptomoedas. Cientista da Computação em
              Formação!
            </Text>
            <Button
              component="a"
              href="https://www.linkedin.com/in/marcell-dactes/"
              target="_blank"
            >
              Fala comigo!
            </Button>
          </motion.div>
        </Grid.Col>
        <Grid.Col span={{ base: 3, md: 5, lg: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box w="250px" h="350px" bg="gray" pos="relative">
              <Image src="/images/hero-image.png" alt="developer image" />
            </Box>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default MainSection;
