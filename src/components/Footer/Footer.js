/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy;
        {document.documentElement.dir === "rtl"
          ? "للحصول على ويب أفضل"
          : " Desenvolvido e Editado por Matheus M. Santos. Versão Demonstrativa *Funções e Ferramentas apenas para demonstração"}
      </Text>
      <List display="flex">
        <ListItem>
          <Link
            color="gray.400"
            href="https://www.linkedin.com/in/matheus-miguel-dos-santos-12033b117/"
          >
            {document.documentElement.dir === "rtl" ? "رخصة" : "Linkedin"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
