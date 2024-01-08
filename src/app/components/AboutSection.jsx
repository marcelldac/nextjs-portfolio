'use client';
import React, { useTransition, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Text } from '@mantine/core';
import { FONT_WEIGHT_BOLD } from '@/constants';
import TabButton from './TabButton';
import TabDataContent from './TabDataContent';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: <TabDataContent />,
  },
  {
    title: 'Certificacoes',
    id: 'certificacoes',
    content: (
      <Flex
        direction='column'
        justify='center'
        align='center'>
        <Text>Scrum Fundamentals, Scrum Study</Text>
        <Text>React.js Form Certificate, Coodesh</Text>
        <Text>Formação C/C++ Developer, Dio</Text>
      </Flex>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <Flex
      mx='auto'
      align='center'
      justify='center'>
      <div className='mt-4 md:mt-0 text-center md:text-left flex flex-col h-full'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <Text
            fw={FONT_WEIGHT_BOLD}
            mb={4}>
            Sobre Mim
          </Text>
          <Text>
            Marcell, estudante de <b>Ciência da Computação</b> e <b>desenvolvedor de software</b>.
            Aproximadamente 1 ano de experiência profissional. Abrangendo back-end, front-end e
            mobile. Busco novas oportunidades e desafios, além de explorar novas tecnologias,
            contribuir para projetos inovadores e que gerem impacto positivo pra sociedade.
            Atualmente trabalhando mais com Typescript, porém sempre buscando novos projetos com
            outras linguagens de programação como Golang, Python e C#. Além de compreender conceitos
            bibliográficos importantes como o Clean Code, Clean Architecture, SOLID e Design
            Patterns Habilidades em Clean Code, Design Patterns e SOLID.
          </Text>
          <Flex
            direction='row'
            justify='center'
            mt={8}>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certificacoes')}
              active={tab === 'certificacoes'}>
              {' '}
              Certificações{' '}
            </TabButton>
          </Flex>
          <Box mt={8}>{TAB_DATA.find((t) => t.id === tab).content}</Box>
        </motion.div>
      </div>
    </Flex>
  );
};

export default AboutSection;
