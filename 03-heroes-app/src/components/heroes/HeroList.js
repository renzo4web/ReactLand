import { Grid, ScaleFade } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

const HeroList = ({ publisher, heroesArr, ...rest }) => {
  let heroes = useMemo(() => {
    return heroesArr
      ? heroesArr
      : getHeroesByPublisher(publisher);
  }, [publisher, heroesArr]);

  return (
    <Grid
      w="90%"
      my={4}
      mx="auto"
      templateColumns="repeat(auto-fit,minmax(350px,1fr))"
      gap={4}
    >
      {heroes.map(heroe => (
        <ScaleFade
          key={heroe.id}
          initialScale={0.5}
          in={true}
        >
          <HeroeCard heroe={heroe} {...rest} />
        </ScaleFade>
      ))}
    </Grid>
  );
};

export default HeroList;
