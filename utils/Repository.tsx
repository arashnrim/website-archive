interface Repository {
  id: number;
  name: string;
  year: string;
  language?: string;
  created_at: string;
  html_url?: string;
  homepage: string;
  archived: boolean;
}

export default Repository;
