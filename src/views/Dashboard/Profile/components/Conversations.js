// Chakra imports
import {
  Avatar,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

const Conversations = ({ title }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px'>
      <CardHeader p='12px 5px' mb='12px'>
        <Text fontSize='lg' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column' w='100%'>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                src={avatar2}
                w='50px'
                h='50px'
                borderRadius='15px'
                me='10px'
              />
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                Oi! Preciso de mais informações...
                </Text>
              </Flex>
            </Flex>
            <Button p='0px' bg='transparent' variant='no-hover'>
              <Text
                fontSize='sm'
                fontWeight='600'
                color='#457F3F'
                alignSelf='center'>
                RESPONDER
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                src={avatar3}
                w='50px'
                h='50px'
                borderRadius='15px'
                me='10px'
              />
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                Excelente trabalho, você pode mudar...
                </Text>
              </Flex>
            </Flex>
            <Button p='0px' bg='transparent' variant='no-hover'>
              <Text
                fontSize='sm'
                fontWeight='600'
                color='#457F3F'
                alignSelf='center'>
                RESPONDER
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                src={avatar4}
                w='50px'
                h='50px'
                borderRadius='15px'
                me='10px'
              />
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                Tenha uma ótima tarde...
                </Text>
              </Flex>
            </Flex>
            <Button p='0px' bg='transparent' variant='no-hover'>
              <Text
                fontSize='sm'
                fontWeight='600'
                color='#457F3F'
                alignSelf='center'>
                RESPONDER
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                src={avatar5}
                w='50px'
                h='50px'
                borderRadius='15px'
                me='10px'
              />
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                Sobre arquivos eu posso...
                </Text>
              </Flex>
            </Flex>
            <Button p='0px' bg='transparent' variant='no-hover'>
              <Text
                fontSize='sm'
                fontWeight='600'
                color='#457F3F'
                alignSelf='center'>
                RESPONDER
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                src={avatar6}
                w='50px'
                h='50px'
                borderRadius='15px'
                me='10px'
              />
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                Sobre arquivos eu posso...
                </Text>
              </Flex>
            </Flex>
            <Button p='0px' bg='transparent' variant='no-hover'>
              <Text
                fontSize='sm'
                fontWeight='600'
                color='#457F3F'
                alignSelf='center'>
                RESPONDER
              </Text>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Conversations;
