"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={[
                "Marcell",
                1000,
                "Desenvolvedor Full-stack",
                1000,
                "Cientista da Computação",
                1000,
                "Analista de Sistemas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "90px" }}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Amante de Linux e Criptomoedas. Atualmente cursando Ciência da
            Computação na Unijorge.
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/marcell-dactes-23b384294/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-green-500 hover:bg-green-600 text-white"
              target="_blank"
            >
              Fala comigo!
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded bg-[#181818] w-[250px] h-[350px] lg:w-[300px] lg:h-[410px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
