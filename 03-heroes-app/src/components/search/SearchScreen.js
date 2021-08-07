import {
  Center,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useQuery } from '../../hooks/useQuery';
import HeroList from '../heroes/HeroList';
const SearchScreen = () => {
  const query = useQuery().get('q');
  const history = useHistory();
  const heroesFilter = heroes.filter(hero =>
    hero.superhero.toLowerCase().startsWith(query)
  );

  if (heroesFilter.length <= 0) {
    return (
      <Center>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>
            Superheroe {query} not found
          </AlertTitle>
          <AlertDescription>
            Please try Again
          </AlertDescription>
          <Button
            onClick={() => history.push('/')}
            ml="auto"
          >
            Go Back
          </Button>
        </Alert>
      </Center>
    );
  }
  return (
    <Center>
      <HeroList withBadge={true} heroesArr={heroesFilter} />
    </Center>
  );
};

export default SearchScreen;
