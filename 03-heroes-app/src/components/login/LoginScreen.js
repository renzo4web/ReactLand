import {
  Button,
  Heading,
  Center,
  Flex,
  Image,
  Box,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import img from './../../assets/heroes/dc-arrow.jpg';

const LoginScreen = () => {
  const [, dispatch] = useAuthContext();
  const [name, setName] = useState('');
  const history = useHistory();
  const lastPath =
    JSON.parse(localStorage.getItem('lastPath')) || '/';

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name,
      },
    });
    history.replace(lastPath);
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
          <Text>Name:</Text>
          <Input
            size="md"
            placeholder="Mr Marvel"
            value={name}
            onChange={({ target }) => setName(target.value)}
            onBlur={({ target }) => setName(target.value)}
            mb="1em"
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
