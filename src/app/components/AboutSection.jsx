"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import TabButton from "./TabButton";

import tsIcon from "../../../assets/svg/ts.svg";
import reactIcon from "../../../assets/svg/react.svg";
import postgresqlIcon from "../../../assets/svg/postgresql.svg";
import nodejsIcon from "../../../assets/svg/nodejs.svg";
import nextjsIcon from "../../../assets/svg/nextjs.svg";
import mongodbIcon from "../../../assets/svg/mongodb.svg";
import mdIcon from "../../../assets/svg/md.svg";
import linuxIcon from "../../../assets/svg/linux.svg";
import htmlIcon from "../../../assets/svg/html.svg";
import dockerIcon from "../../../assets/svg/docker.svg";
import cssIcon from "../../../assets/svg/css.svg";
import nestjsIcon from "../../../assets/svg/nestjs.svg";
import golangIcon from "../../../assets/svg/golang.svg";
import pythonIcon from "../../../assets/svg/python.svg";
import jqueryIcon from "../../../assets/svg/jquery.svg";
import reduxIcon from "../../../assets/svg/redux.svg";
import jsIcon from "../../../assets/svg/js.svg";
import flaskIcon from "../../../assets/svg/flask.svg";
import mysqlIcon from "../../../assets/svg/mysql.svg";
import gitIcon from "../../../assets/svg/git.svg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-12 gap-4 h-85 place-content-center ">
        <Image src={tsIcon} alt="Typescript" />
        <Image src={jsIcon} alt="Javascript" />
        <Image src={reactIcon} alt="React" />
        <Image src={reduxIcon} alt="Redux" />
        <Image src={nextjsIcon} alt="NextJs" />
        <Image src={nodejsIcon} alt="NodeJs" />
        <Image src={postgresqlIcon} alt="PostgreSQL" />
        <Image src={mongodbIcon} alt="MongoDB" />
        <Image src={mysqlIcon} alt="MySQL" />
        <Image src={mdIcon} alt="Markdown" />
        <Image src={linuxIcon} alt="Linux" />
        <Image src={htmlIcon} alt="HTML5" />
        <Image src={cssIcon} alt="CSS3" />
        <Image src={dockerIcon} alt="Docker" />
        <Image src={nestjsIcon} alt="NestJs" />
        <Image src={golangIcon} alt="Golang" />
        <Image src={pythonIcon} alt="Python" />
        <Image src={flaskIcon} alt="Flask" />
        <Image src={jqueryIcon} alt="Python" />
        <Image src={gitIcon} alt="Git" />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex md:flex-col justify-center items-center">
        <h1>Ciência da Computação, Unijorge</h1>
        <h1>Técnico em Desenvolvimento de Sistemas, Senai Cimatec</h1>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex md:flex-col justify-center items-center">
        <h1>Scrum Fundamentals, Scrum Study</h1>
        <h1>React.js Form Certificate, Coodesh</h1>
        <h1>Formação C/C++ Developer, Dio</h1>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"],
  });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="mx-auto md:flex sm:py-16 xl:px-16 items-center justify-center">
      <div className="mt-4 md:mt-0 text-center md:text-left flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Atualmente trabalhando com os frameworks mais avançados do mercado
            web. Utilizando Typescript como linguagem principal para o
            desenvolvimento de aplicações web complexas e dinâmicas. Além de
            APIs que permitem a comunicação o lado do cliente e servidor. Desde
            frameworks podem ser citados Next.js e Nest.js. Sigo aprofundando
            meus estudos, buscando entender mais sobre arquitetura de software,
            GraphQL e Message Brokers.
          </p>
          <div className="flex flex-row justify-center mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formações{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificações{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
