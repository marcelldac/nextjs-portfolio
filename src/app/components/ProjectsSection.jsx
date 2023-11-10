"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 7,
    title: "Graphic Bubble Sort",
    description:
      "Uma releitura de um antigo projeto meu em React.js + Javascript. Agora usando Next.js v14 + Typescript. Trata-se de uma visualização de funcionamento de um algortimo de ordenação chamado Bubble Sort.",
    image: "/images/projects/7.png",
    tag: ["Todos", "Front"],
    gitUrl: "https://github.com/marcelldac/graphic-bubble-sort",
    previewUrl: "https://graphic-bubble-sort.vercel.app/",
  },
  {
    id: 1,
    title: "SuCelso API",
    description:
      "Um projeto acadêmico que simula uma interface funcional de uma escola. Com relacionamentos entre entidades como turmas, professores e cursos. Similar ao projeto Learn More.",
    image: "/images/projects/1.png",
    tag: ["Todos", "Back"],
    gitUrl: "https://github.com/marcelldac/sucelso-server",
    previewUrl: "https://github.com/marcelldac/sucelso-server",
  },
  {
    id: 2,
    title: "Learn More",
    description:
      "API desenvolvida em NodeJs, utilizando o banco de dados PostgreSQL. Foram estabelecidos relacionamentos entre as entidades professor e publicações (para que os professores possam ter publicações) e professor e disciplinas (para que o professor possa ensinar uma ou mais disciplinas). Ambos os relacionamentos são de '1 para muitos' (1:n).",
    image: "/images/projects/2.png",
    tag: ["Todos", "Back"],
    gitUrl: "https://github.com/marcelldac/server_learn_more_system",
    previewUrl: "https://github.com/marcelldac/server_learn_more_system",
  },
  {
    id: 3,
    title: "DacTI",
    description:
      "DacTI é o meu projeto que comercializa web apps e projetos de TI em geral, a preços acessíveis!",
    image: "/images/projects/3.png",
    tag: ["Todos", "Front"],
    gitUrl: "https://github.com/marcelldac/dacti",
    previewUrl: "https://dacti-xi.vercel.app",
  },
  {
    id: 4,
    title: "React Native Guide",
    description:
      "Um guia para iniciantes em React Native para aqueles que desejam começar com o framework. React Native foi o primeiro framework com o qual trabalhei. Inicialmente, encontrei algumas dificuldades para entender tópicos importantes como o Async Storage e o Redux Saga. Criei este guia para que as pessoas não se sintam tão perdidas quanto eu me senti quando comecei.",
    image: "/images/projects/4.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "https://github.com/marcelldac/react-native-guide",
    previewUrl: "https://github.com/marcelldac/react-native-guide",
  },
  {
    id: 5,
    title: "Q-Coder NPM Lib",
    description:
      "Uma biblioteca NPM com interface de usuário que gera um código QR personalizado a partir de qualquer link fornecido pelo usuário. Feita em Typescript. Uma biblioteca NPM é uma forma de compartilhar código em JavaScript com outros desenvolvedores, permitindo que eles usem essa funcionalidade em seus próprios projetos. Nesse caso, a biblioteca possui uma interface de usuário construída com React.js e tem a capacidade de criar códigos QR personalizados a partir de URLs fornecidas pelos usuários. Isso pode ser útil em diversos contextos, como aplicativos móveis, sites ou qualquer aplicação que necessite de geração de QR codes a partir de links fornecidos dinamicamente.",
    image: "/images/projects/5.png",
    tag: ["Todos", "Back"],
    gitUrl: "https://github.com/marcelldac/q-coder",
    previewUrl: "https://www.npmjs.com/package/q-coder",
  },
  {
    id: 6,
    title: "MikesHelp",
    description:
      "Um protótipo inicial de um aplicativo relacionado à saúde mental, voltado ao público militar. Atualmente em processo de desenvolvimento.",
    image: "/images/projects/6.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front"
          isSelected={tag === "Front"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back"
          isSelected={tag === "Back"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Back"
          isSelected={tag === "Back"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
