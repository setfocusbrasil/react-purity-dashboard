import React from 'react';
import { Box, Flex, Text, Center } from "@chakra-ui/react";

const VideoList = () => {
  return (
    <Center h="auto" mt={{ base: "150px", lg: "75px" }} flexDirection="column"> {/* Ajustado para h="auto" e flexDirection="column" */}
      <Flex justify="space-between" direction={{ base: "column", lg: "row" }} w={{ base: "100%", lg: "1000px" }} mb={10}>
        <Box w={{ base: "90%", lg: "350px" }} h={{ base: "400px", lg: "500px" }} borderRadius="10px" borderWidth="1px" p={5}>
          <iframe width="100%" height="60%" src="https://www.youtube.com/embed/tBokbN_fzco" frameborder="0" allowfullscreen></iframe>
          <Text mt={15}>Temas foram destaque na Sala Transição Energética do Maior Congresso Técnico de Bioenergia do Mundo</Text>
        </Box>
        <Box w={{ base: "90%", lg: "350px" }} h={{ base: "400px", lg: "500px" }} borderRadius="10px" borderWidth="1px" p={5}>
          <iframe width="100%" height="60%" src="https://www.youtube.com/embed/2YQst7JGxYI" frameborder="0" allowfullscreen></iframe>
          <Text mt={15}>Sala Industrial apresentou estratégias para maximizar a eficiência e a sustentabilidade da indústria.</Text>
        </Box>
        <Box w={{ base: "90%", lg: "350px" }} h={{ base: "400px", lg: "500px" }} borderRadius="10px" borderWidth="1px" p={5}>
          <iframe width="100%" height="60%" src="https://www.youtube.com/embed/MCAeL_-4l18" frameborder="0" allowfullscreen></iframe>
          <Text mt={15}>Sala Inteligência de Mercado, do Maior Congresso Técnico de Bioenergia Mundo, contou com discussões sobre as perspectivas para o açúcar e o etanol, além de fortalecer o relacionamento com stakeholders.</Text>
        </Box>
      </Flex>
      <Text w={{ base: "90%", lg: "1000px" }} textAlign="center">
        Coluna de vídeos de demonstração. A função final tem paginação de vídeos, pesquisa de vídeos no banco de dados e nível de acesso (vídeos específicos para alguns usuários).
      </Text>
    </Center>
  );
};

export default VideoList;
