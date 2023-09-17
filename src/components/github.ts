import data from "../data.json";

const response = await fetch(`https://api.github.com/users/${data.githubId}`, {
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
export const user = await response.json();
