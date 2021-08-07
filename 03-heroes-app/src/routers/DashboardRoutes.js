import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import DcScreen from '../components/dc/DcScreen';
import AllHeroesScreen from '../components/heroes/AllHeroesScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

const DashboardRoutes = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = `${pathname.replace('/', '')}`;
    document.title = !title
      ? 'All Heroes'
      : `${title.charAt(0).toUpperCase()}${title.slice(
          1
        )} Heroes`;
  }, [pathname]);

  return (
    <Box w="100vw">
      <Navbar />

      <Box>
        <Switch>
          <Route exact path="/marvel">
            <MarvelScreen />
          </Route>
          <Route exact path="/dc">
            <DcScreen />
          </Route>
          <Route exact path="/heroe/:heroeId">
            <HeroScreen />
          </Route>

          <Route path="/search">
            <SearchScreen />
          </Route>

          <Route path="/">
            <AllHeroesScreen />
          </Route>
          <Redirect to="/marvel" />
        </Switch>
      </Box>
    </Box>
  );
};

export default DashboardRoutes;
