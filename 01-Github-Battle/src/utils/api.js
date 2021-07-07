import asyncWrapper from "./asyncWrapper";

const fetchPopularRepos = async (languaje = "") => {
  const url = `https://api.github.com/search/repositories?q=starts:%3E1+language:${languaje}&sort=starts&order=desc&type=Repositories`;

  const response = await asyncWrapper([fetch(url)]);

  //   console.log(response.slice(0, 20));
  return response.items;
};

export default fetchPopularRepos;
