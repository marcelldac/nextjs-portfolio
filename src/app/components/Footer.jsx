import { Flex, Text } from "@mantine/core";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <Flex justify="space-between" p={12}>
        <Text>Marcell Dactes</Text>
        <Text>Todos os direitos reservados.</Text>
      </Flex>
    </footer>
  );
};

export default Footer;
