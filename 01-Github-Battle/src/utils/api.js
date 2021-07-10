import asyncWrapper from "./asyncWrapper";

const fetchPopularRepos = async (languaje = "") => {
  const url = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${languaje}&sort=stars&order=desc&type=Repositories`
  );

  const response = await asyncWrapper([fetch(url)]);

  //   console.log(response.slice(0, 20));
  return response.items;
};

const fetchUser = async (user1, user2) => {
  const url = (who) => window.encodeURI(`https://api.github.com/users/${who}`);

  const response = await asyncWrapper([
    fetch(url(user1), {
      headers: { Accept: "application/vnd.github.v3+json" },
    }),
    fetch(url(user2), {
      headers: { Accept: "application/vnd.github.v3+json" },
    }),
  ]);
  const [p1,p2] = await Promise.allSettled(response.map(async(res) => await res.value.json()))
  return [p1.value,p2.value];
};

export { fetchPopularRepos, fetchUser };
