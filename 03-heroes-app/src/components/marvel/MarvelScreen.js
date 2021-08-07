import { Center } from '@chakra-ui/react';
import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {
  return (
    <Center>
      <HeroList publisher="Marvel Comics" />
    </Center>
  );
};

export default MarvelScreen;
