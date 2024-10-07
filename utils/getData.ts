export const fetchStarredRepos = async () => {
  const res = await fetch(`https://api.github.com/users/Boutzi/starred`);
  const data = await res.json();
  return data;
};
