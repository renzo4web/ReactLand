import asyncWrapper from "./asyncWrapper";

const fetchPopularRepos = async (languaje = "") => {
  const url = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${languaje}&sort=stars&order=desc&type=Repositories`
  );

  const response = await asyncWrapper([fetch(url)]);

  return response.items;
};
const getScore = async (user, followers) => {
  const url = window.encodeURI(`https://api.github.com/users/${user}/repos`);
  const res = await fetch(url);

  const json = await res.json();
  if (json.message) {
    return 0;
  }
  const score =
    json.reduce((count, user) => count + user.stargazers_count, 0) +
    followers * 3;
  return score;
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
  const results = await Promise.allSettled(
    response.map(async (res) => await res.value.json())
  );
  console.log({ results });
  const hasError = results.some((res) => res.value.message);
  if (hasError) {
    console.log({ hasError });
    return false;
  }
  const [p1, p2] = results;
  const [score1, score2] = await Promise.all([
    getScore(user1, p1.value.followers),
    getScore(user2, p2.value.followers),
  ]);

  const resultsBattle = [
    { ...p1.value, score: score1 },
    { ...p2.value, score: score2 },
  ];
  resultsBattle.sort((a, b) => b.score - a.score);
  return resultsBattle;
};

export { fetchPopularRepos, fetchUser };
