import {
  Badge,
  Box,
  Flex,
  Image,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const HeroeCard = ({
  heroe,
  withBadge,
  children,
}) => {
  const {
    id,
    superhero,
    characters,
    alter_ego,
    publisher,
  } = heroe;
  const imgUrl = `/heroes/${id}.jpg`;

  const colorScheme = publisher.includes('DC')
    ? 'blue'
    : 'red';

  return (
    <Box
      shadow="md"
      key={id}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex direction={['column', 'row']}>
        <Image
          maxW={['100%', '150px']}
          maxH={['200px', '100%']}
          objectFit="cover"
          objectPosition="top"
          src={imgUrl}
          alt={superhero}
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Flex
          ml={3}
          mt={3}
          direction="column"
          justifyContent="space-between"
        >
          {children}
          {withBadge && (
            <Badge colorScheme={colorScheme}>
              {publisher}
            </Badge>
          )}

          <Box mb={4} fontWeight="bold" as="h3">
            {superhero}
          </Box>
          {alter_ego !== characters && (
            <Box as="p">{alter_ego}</Box>
          )}
          <Box my={4} as="p">
            {alter_ego !== characters
              ? characters.replace(`${alter_ego},`, '')
              : characters}
          </Box>

          <Link
            color="orange.500"
            fontWeight="bold"
            as={RouterLink}
            to={`/heroe/${id}`}
            mb={2}
            mt="auto"
          >
            More
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
