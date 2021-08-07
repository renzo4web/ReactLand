import { Center } from '@chakra-ui/react';
import React from 'react';
import HeroList from '../heroes/HeroList';

const DcScreen = () => {
  return (
    <Center>
      <HeroList publisher="DC Comics" />
    </Center>
  );
};

export default DcScreen;
