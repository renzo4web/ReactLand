import { Center } from '@chakra-ui/react';
import React from 'react';
import { heroes } from '../../data/heroes';
import HeroList from './HeroList';

const AllHeroesScreen = () => {
  return (
    <Center>
      <HeroList withBadge={true} heroesArr={heroes} />
    </Center>
  );
};

export default AllHeroesScreen;
