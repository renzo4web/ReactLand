import {
  Badge,
  Center,
  Text,
  Image,
  Box,
  Flex,
  Divider,
  Button,
  SlideFade,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import {
  useParams,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

const HeroScreen = () => {
  let { heroeId } = useParams();

  const history = useHistory();
  const heroe = useMemo(
    () => getHeroesById(heroeId)[0],
    [heroeId]
  );

  if (!heroe) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;

  const imgUrl = `/heroes/${heroeId}.jpg`;
  const colorScheme = publisher.includes('DC')
    ? 'blue'
    : 'red';

  const handleReturn = () => {
    history.length <= 2
      ? history.push(`/${heroeId.split('-')[0]}`)
      : history.goBack();
  };

  return (
    <Center>
      <Flex
        w="90%"
        direction={['column', 'row']}
        alignItems="center"
        justifyContent="flex-start"
      >
        <SlideFade
          initialScale={0.8}
          in={true}
          offsetX="-40px"
        >
          <Image
            borderRadius="20px"
            shadow="md"
            src={imgUrl}
            maxW="300px"
          />
        </SlideFade>
        <Box
          fontSize="20px"
          ml={['0', '2em']}
          mt={['2em', '0']}
          alignSelf="start"
          mb="3em"
        >
          <Badge colorScheme={colorScheme}>
            {heroe.publisher}
          </Badge>
          <Text fontSize="5xl" fontWeight="bold" as="h1">
            {superhero}
          </Text>
          <Divider />
          <Box display="flex" as="p" mt="1em">
            <Text as="strong" fontWeight="bold">
              Alter Ego:
            </Text>
            <Text ml={1} as="span">
              {alter_ego}
            </Text>
          </Box>

          <Box display="flex" as="p">
            <Text as="strong" fontWeight="bold">
              First Appearance:
            </Text>
            <Text ml={1} as="span">
              {first_appearance}
            </Text>
          </Box>

          <Box display="flex" as="p">
            <Text as="strong" fontWeight="bold">
              Characters:
            </Text>
            <Text ml={1} as="span">
              {characters}
            </Text>
          </Box>
          <Button
            mt="1em"
            variant="outline"
            colorScheme={colorScheme}
            onClick={handleReturn}
          >
            Return
          </Button>
        </Box>
      </Flex>
    </Center>
  );
};

export default HeroScreen;
