import { GithubUserResponse } from "@/types/user.types";

export const getRepositories = async () => {
  return fetch(`https://api.github.com/users/Boutzi/starred`)
    .then((res) => res.json())
    .then((data) => data);
};

export const fetchGithubUserData = async (): Promise<GithubUserResponse> => {
  const GITHUB_API_URL = "https://api.github.com/users/Boutzi";
  const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_BEARER_TOKEN;

  try {
    const response = await fetch(GITHUB_API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch GitHub user data: ${response.statusText}`
      );
    }

    const data: GithubUserResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
};
