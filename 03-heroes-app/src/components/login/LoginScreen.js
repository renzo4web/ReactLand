import {
  Button,
  Heading,
  Center,
  Flex,
  Image,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import img from './../../assets/heroes/dc-arrow.jpg';

const LoginScreen = () => {
  const history = useHistory();
  const handleLogin = () => {
    console.log(history);
    history.replace('/');
  };

  return (
    <Center h="100vh">
      <Box>
        <Flex direction="column">
          <Heading mb="20px" as="h1">
            Login
          </Heading>
          <Image
            my="1em"
            boxSize="200px"
            objectFit="cover"
            src={img}
            alt="Arrow"
          />
          <Button
            onClick={() => handleLogin()}
            colorScheme="teal"
          >
            Login
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default LoginScreen;
