import asyncWrapper from "./asyncWrapper";

const fetchPopularRepos = async (languaje = "") => {
  const url = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${languaje}&sort=stars&order=desc&type=Repositories`
  );

  const response = await asyncWrapper([fetch(url)]);

  //   console.log(response.slice(0, 20));
  return response.items;
};

export default fetchPopularRepos;
