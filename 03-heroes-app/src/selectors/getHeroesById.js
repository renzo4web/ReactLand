import { heroes } from '../data/heroes';

export const getHeroesById = id => {
  const validIds = ['dc', 'marvel'];

  if (!validIds.includes(id.split('-')[0])) {
    throw new Error("Invalid id, id must be formated 'dc-hero'");
  }

  return heroes.filter(heroes => heroes.id === id);
};
