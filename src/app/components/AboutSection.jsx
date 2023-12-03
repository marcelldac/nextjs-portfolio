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
import gitIcon from "../../../assets/svg/mysql.svg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Image src={tsIcon} alt="Typescript" width={40} height={40} />
        <Image src={jsIcon} alt="Javascript" width={40} height={40} />
        <Image src={reactIcon} alt="React" width={40} height={40} />
        <Image src={reduxIcon} alt="Redux" width={40} height={40} />
        <Image src={nextjsIcon} alt="NextJs" width={40} height={40} />
        <Image src={nodejsIcon} alt="NodeJs" width={40} height={40} />
        <Image src={postgresqlIcon} alt="PostgreSQL" width={40} height={40} />
        <Image src={mongodbIcon} alt="MongoDB" width={40} height={40} />
        <Image src={mysqlIcon} alt="MySQL" width={40} height={40} />
        <Image src={mdIcon} alt="Markdown" width={40} height={40} />
        <Image src={linuxIcon} alt="Linux" width={40} height={40} />
        <Image src={htmlIcon} alt="HTML5" width={40} height={40} />
        <Image src={cssIcon} alt="CSS3" width={40} height={40} />
        <Image src={dockerIcon} alt="Docker" width={40} height={40} />
        <Image src={nestjsIcon} alt="NestJs" width={40} height={40} />
        <Image src={golangIcon} alt="Golang" width={40} height={40} />
        <Image src={pythonIcon} alt="Python" width={40} height={40} />
        <Image src={flaskIcon} alt="Flask" width={40} height={40} />
        <Image src={jqueryIcon} alt="Python" width={40} height={40} />
        <Image src={gitIcon} alt="Git" width={40} height={40} />
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
