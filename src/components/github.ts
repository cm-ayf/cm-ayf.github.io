import { Octokit } from "@octokit/core";

const octokit = new Octokit();
const username = "cm-ayf";

const [userResponse, socialAccountsResponse] = await Promise.all([
  octokit.request("GET /users/{username}", { username }),
  octokit.request("GET /users/{username}/social_accounts", { username }),
]);

export interface SocialAccounts {
  [key: string]: string;
}

export type Service = keyof SocialAccounts;

export const user = userResponse.data;
export const socialAccounts: SocialAccounts = {
  github: user.html_url,
  ...Object.fromEntries(
    socialAccountsResponse.data.map((account) => [
      account.provider,
      account.url,
    ]),
  ),
};
