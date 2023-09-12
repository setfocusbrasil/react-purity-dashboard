// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction='column'>
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
        tabs={[
          {
            name: "VISÃO GERAL",
            icon: <FaCube w='100%' h='100%' />,
          },
          {
            name: "EQUIPES",
            icon: <IoDocumentsSharp w='100%' h='100%' />,
          },
          {
            name: "PROJETOS",
            icon: <FaPenFancy w='100%' h='100%' />,
          },
        ]}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <PlatformSettings
          title={"Configurações da plataforma"}
          subtitle1={"CONTA"}
          subtitle2={"APLICATIVO"}
        />
        <ProfileInformation
          title={"Informação do Perfil"}
          description={
            "Olá, esse é um exemplo de pagina de perfil para um componente de Rede Social dentro do Painel Administrativo."
          }
          name={"Esthera Jackson"}
          mobile={"(14) 98234-5678"}
          email={"esthera@gmail.com"}
          location={"Brasil"}
        />
        <Conversations title={"Conversas"} />
      </Grid>
      <Projects title={"Projetos"} description={"Arquitetos projetam casas"} />
    </Flex>
  );
}

export default Profile;
