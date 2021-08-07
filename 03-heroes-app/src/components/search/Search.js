import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [value, setValue] = useState('');
  const history = useHistory();
  const theme = useColorModeValue('light', 'dark');
  const currentBg = theme === 'light' ? 'white' : 'black';
  const currentColor =
    theme !== 'light' ? 'white' : 'black';

  const handleSubmit = e => {
    e.preventDefault();

    if (!value.trim()) return;

    history.push(`/search?q=${value}`);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup ml="1">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color={currentColor} />}
        />{' '}
        <Input
          bg={currentBg}
          color={currentColor}
          type="text"
          size="md"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          placeholder="Search your favorite superhero"
        />
      </InputGroup>
    </form>
  );
};

export default Search;
