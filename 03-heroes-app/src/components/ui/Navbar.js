import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import Search from '../search/Search';
import { useAuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = props => {
  const { name } = useAuthContext()[0];
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Text
        fontSize="xl"
        as="strong"
        ml="auto"
        fontWeight="bold"
        color="white"
      >
        {name}
      </Text>
      <ColorModeSwitcher />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg
    width="24"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      onClick={toggle}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({
  children,
  isLast,
  to = '/',
  color,
  ...rest
}) => {
  return (
    <Link to={to}>
      <Text
        fontWeight="bold"
        display="block"
        color={color}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen, color }) => {
  const [auth, dispatch] = useAuthContext();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace('/login');
  };

  return (
    <Box
      display={{
        base: isOpen ? 'block' : 'none',
        md: 'block',
      }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        color={color}
        align="center"
        justify={[
          'center',
          'space-between',
          'flex-end',
          'flex-end',
        ]}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">All</MenuItem>
        <MenuItem to="/dc">DC</MenuItem>
        <MenuItem to="/marvel">Marvel</MenuItem>
        <Button
          onClick={handleLogout}
          size="md"
          rounded="md"
          color={color}
          bg={[
            'white',
            'white',
            'primary.500',
            'primary.500',
          ]}
          _hover={{
            bg: [
              'primary.100',
              'primary.100',
              'primary.600',
              'primary.600',
            ],
          }}
        >
          Logout
        </Button>
        <Search />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  const { pathname } = useLocation();
  const bg = pathname.includes('dc')
    ? 'blue.500'
    : 'red.500';

  const color = useColorModeValue('black', 'gray.800');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={bg}
      color={color}
      {...props}
    >
      {children}
    </Flex>
  );
};
