"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Typescript</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>GraphQL</li>
        <li>Nest.js</li>
        <li>Golang</li>
        <li>Python</li>
        <li>Pandas</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ciência da Computação, Unijorge</li>
        <li>Técnico em Desenvolvimento de Sistemas, Senai Cimatec</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrum Fundamentals, Scrum Study</li>
        <li>React.js Form Certificate, Coodesh</li>
        <li>Formação C/C++ Developer, Dio</li>
      </ul>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="computer image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Atualmente trabalhando com os frameworks mais avançados do mercado
            web. Utilizando Typescript como linguagem principal para o
            desenvolvimento de aplicações web complexas e dinâmicas. Além de
            APIs que permitem a comunicação o lado do cliente e servidor. Desde
            frameworks podem ser citados Next.js e Nest.js. Sigo aprofundando
            meus estudos, buscando entender mais sobre arquitetura de software,
            GraphQL, RabbitMQ e Kafka.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
