import { useEffect, useState } from 'react';

export const useFetch = ({ name }) => {
  const [hero, setHero] = useState({});

  const tk = '301715191729878';

  useEffect(() => {
    let isCurrent = true;

    fetch('https://superheroapi.com/api/301715191729878/search/superman', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });

    return () => {
      isCurrent = false;
    };
  }, [name]);

  return hero;
};
