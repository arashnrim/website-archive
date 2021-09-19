interface License {
  name: string;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  language?: string;
  license?: License;
  html_url?: string;
  homepage: string;
  archived: boolean;
}

export type {Repository};
