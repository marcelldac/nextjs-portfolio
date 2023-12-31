"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Box, Text } from "@mantine/core";

const projects = [
  {
    id: 11,
    title: "API Crypto Guardian",
    description:
      "API desenvolvida com o intuito de facilitar transações envolvendo criptomoedas, especificamente Ethereum. Basta passar o valor mínimo e máximo que você tem disponível para fazer a transação e a API vai validar a transação como true (possível de ser feita) e false (impossível de ser feita). É uma API de validação que atrelada a um front-end previamente configurado, tem muito poder!",
    image: "/images/projects/11.png",
    url: "https://documenter.getpostman.com/view/27634188/2s9YeK4pvV",
  },
  {
    id: 10,
    title: "Blog Nerd Navegante",
    description:
      "Meu blog feito com NextJs e MongoDB. Posto constantemente conteúdos sobre desenvolvimento de software, arquitetura de software e tudo mais.",
    image: "/images/projects/10.png",
    url: "https://nerd-navegante.vercel.app/",
  },
  {
    id: 3,
    title: "DacTI",
    description:
      "DacTI é o meu projeto que comercializa web apps e projetos de TI em geral, a preços acessíveis!",
    image: "/images/projects/3.png",
    url: "https://dacti-xi.vercel.app",
  },
  {
    id: 9,
    title: "Newtion",
    description:
      "Com interface simples e minimalista, o Newtion une o melhor do mundo de editores de texto e minimalismo. A premissa é ser direto ao ponto. Sem distrações, agrupando o necessário para um bom editor de texto. Este é um projeto open-source em sua versão inicial. Futuramente novas features serão adicionadas.",
    image: "/images/projects/9.png",
    url: "https://newtion-jet.vercel.app/",
  },
  {
    id: 8,
    title: "TODO List",
    description:
      "Uma todo list feita com ReactJs no front-end, NodeJs no back-end, utilizando PostgreSQL como banco de dados, utilizando a ORM Prisma.",
    image: "/images/projects/8.png",
    url: "https://ultimate-task-list.vercel.app/",
  },
  {
    id: 7,
    title: "Graphic Bubble Sort",
    description:
      "Uma releitura de um antigo projeto meu em React.js + Javascript. Agora usando Next.js v14 + Typescript. Trata-se de uma visualização de funcionamento de um algortimo de ordenação chamado Bubble Sort.",
    image: "/images/projects/7.png",
    url: "https://graphic-bubble-sort.vercel.app/",
  },
  {
    id: 1,
    title: "SuCelso API",
    description:
      "Um projeto acadêmico que simula uma interface funcional de uma escola. Com relacionamentos entre entidades como turmas, professores e cursos. Similar ao projeto Learn More.",
    image: "/images/projects/1.png",
    url: "https://github.com/marcelldac/sucelso-server",
  },
  {
    id: 2,
    title: "Learn More",
    description:
      "API desenvolvida em NodeJs, utilizando o banco de dados PostgreSQL. Foram estabelecidos relacionamentos entre as entidades professor e publicações (para que os professores possam ter publicações) e professor e disciplinas (para que o professor possa ensinar uma ou mais disciplinas). Ambos os relacionamentos são de '1 para muitos' (1:n).",
    image: "/images/projects/2.png",
    url: "https://github.com/marcelldac/server_learn_more_system",
  },
  {
    id: 4,
    title: "React Native Crash Guide",
    description:
      "Um guia para iniciantes em React Native para aqueles que desejam começar com o framework. React Native foi o primeiro framework com o qual trabalhei. Inicialmente, encontrei algumas dificuldades para entender tópicos importantes como o Async Storage e o Redux Saga. Criei este guia para que as pessoas não se sintam tão perdidas quanto eu me senti quando comecei.",
    image: "/images/projects/4.png",
    url: "https://github.com/marcelldac/react-native-crash-guide",
  },
  {
    id: 5,
    title: "Q-Coder NPM Lib",
    description:
      "Uma biblioteca NPM com interface de usuário que gera um código QR personalizado a partir de qualquer link fornecido pelo usuário. Feita em Typescript. Uma biblioteca NPM é uma forma de compartilhar código em JavaScript com outros desenvolvedores, permitindo que eles usem essa funcionalidade em seus próprios projetos. Nesse caso, a biblioteca possui uma interface de usuário construída com React.js e tem a capacidade de criar códigos QR personalizados a partir de URLs fornecidas pelos usuários. Isso pode ser útil em diversos contextos, como aplicativos móveis, sites ou qualquer aplicação que necessite de geração de QR codes a partir de links fornecidos dinamicamente.",
    image: "/images/projects/5.png",
    url: "https://www.npmjs.com/package/q-coder",
  },
];

const ProjectsSection = () => {
  return (
    <Box>
      <Text size="xl" ta="center" my={30}>
        Projetos
      </Text>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            url={project.url}
          />
        ))}
      </ul>
    </Box>
  );
};

export default ProjectsSection;
