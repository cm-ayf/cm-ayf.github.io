import data from "../data.json";

export type Service = "github" | "twitter" | "linkedin" | "instagram";

const bases: Record<Service, string> = {
  github: "https://github.com/",
  twitter: "https://twitter.com/",
  linkedin: "https://www.linkedin.com/in/",
  instagram: "https://www.instagram.com/",
};

export function href(service: Service) {
  return bases[service] + data[`${service}Id`];
}
