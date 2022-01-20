interface Repository {
  id: number;
  name: string;
  description: string;
  language?: string;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
  html_url?: string;
  homepage: string;
  archived: boolean;
}

export default Repository;
