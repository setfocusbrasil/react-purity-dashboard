// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Tabela de Autores"}
        captions={["Autor", "Função", "Status", "Empregado", ""]}
        data={tablesTableData}
      />
      <Projects
        title={"Tabela de Projetos"}
        captions={["Empresas", "Orçamento", "Status", "Conclusão", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Tables;
