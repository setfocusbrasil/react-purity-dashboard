import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text, 
  Image,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

const AddVideo = () => {
  const [videoData, setVideoData] = useState({
    name: '',
    description: '',
    link: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({
      ...videoData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    toast({
      title: "Vídeo Adicionado!",
      description: "Seu vídeo foi adicionado com sucesso.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  
  return (
    <Box p={{ base: 4, md: 8, xl: 150 }}>
      <FormControl id="videoForm">
        <FormLabel>Nome do Vídeo</FormLabel>
        <Input
          type="text"
          name="name"
          value={videoData.name}
          onChange={handleChange}
        />

        <FormLabel mt={4}>Descrição do Vídeo</FormLabel>
        <Textarea
          name="description"
          value={videoData.description}
          onChange={handleChange}
        />

        <FormLabel mt={4}>Link do Vídeo</FormLabel>
        <Input
          type="text"
          name="link"
          value={videoData.link}
          onChange={handleChange}
        />

        <Button
          mt={4}
          colorScheme="green"
          onClick={handleSubmit}
        >
          Salvar
        </Button>
      </FormControl>
      <Text mt={4}>
        Pagina simples de um formulário de cadastro, há muitas funções que podem ser adicionadas para melhor administração dos vídeos adicionados (Painel administrativo para edição, remoção de vídeos e gerenciamento de usuários que irão acessar a vídeos específicos).
      </Text>
      <Text mt={2}>
        Abaixo um exemplo de algumas funções de gerenciamento de criação de uma avaliação psicossocial, no caso dos vídeos é quase o mesmo sistema:
      </Text>
      <Image 
        mt={4} 
        src="https://imgur.com/ZKEJDOk.png" 
        alt="Exemplo de gerenciamento" 
        boxSize={{ base: '100%', md: '80%', xl: '100%' }}
      />
    </Box>
  );
};

export default AddVideo;
