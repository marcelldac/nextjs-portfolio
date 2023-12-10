"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex, Grid, Text } from "@mantine/core";
import { FONT_WEIGHT_BOLD } from "@/constants";
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
      <Grid>
        <Grid.Col span={1}>
          <Image src={tsIcon} alt="Typescript" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={jsIcon} alt="Javascript" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={reactIcon} alt="React" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={reduxIcon} alt="Redux" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={nextjsIcon} alt="NextJs" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={nodejsIcon} alt="NodeJs" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={postgresqlIcon} alt="PostgreSQL" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={mongodbIcon} alt="MongoDB" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={mysqlIcon} alt="MySQL" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={mdIcon} alt="Markdown" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={linuxIcon} alt="Linux" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={htmlIcon} alt="HTML5" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={cssIcon} alt="CSS3" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={dockerIcon} alt="Docker" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={nestjsIcon} alt="NestJs" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={golangIcon} alt="Golang" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={pythonIcon} alt="Python" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={flaskIcon} alt="Flask" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={jqueryIcon} alt="Python" />
        </Grid.Col>
        <Grid.Col span={1}>
          <Image src={gitIcon} alt="Git" />
        </Grid.Col>
      </Grid>
    ),
  },
  {
    title: "Formacoes",
    id: "formacoes",
    content: (
      <Flex direction="column" justify="center" align="center">
        <Text>Ciência da Computação, Unijorge</Text>
        <Text>Técnico em Desenvolvimento de Sistemas, Senai Cimatec</Text>
      </Flex>
    ),
  },
  {
    title: "Certificacoes",
    id: "certificacoes",
    content: (
      <Flex direction="column" justify="center" align="center">
        <Text>Scrum Fundamentals, Scrum Study</Text>
        <Text>React.js Form Certificate, Coodesh</Text>
        <Text>Formação C/C++ Developer, Dio</Text>
      </Flex>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <Flex mx="auto" align="center" justify="center">
      <div className="mt-4 md:mt-0 text-center md:text-left flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <Text fw={FONT_WEIGHT_BOLD} mb={4}>
            Sobre Mim
          </Text>
          <Text>
            Atualmente trabalhando com os frameworks mais avançados do mercado
            web. Utilizando Typescript como linguagem principal para o
            desenvolvimento de aplicações web complexas e dinâmicas. Além de
            APIs que permitem a comunicação o lado do cliente e servidor. Desde
            frameworks podem ser citados Next.js e Nest.js. Sigo aprofundando
            meus estudos, buscando entender mais sobre arquitetura de software,
            GraphQL e Message Brokers.
          </Text>
          <Flex direction="row" justify="center" mt={8}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("formacoes")}
              active={tab === "formacoes"}
            >
              {" "}
              Formações{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificacoes")}
              active={tab === "certificacoes"}
            >
              {" "}
              Certificações{" "}
            </TabButton>
          </Flex>
          <Box mt={8}>{TAB_DATA.find((t) => t.id === tab).content}</Box>
        </motion.div>
      </div>
    </Flex>
  );
};

export default AboutSection;
