export interface Show {
  id: string;
  url: string;
  name: string;
  language: string;
  genres: string[];
  runtime: string;
  premiered: string;
  rating: {
    average: number;
  };
  image?: {
    medium?: string;
    original?: string;
  };
  summary: string;
  episodes?: {};
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export interface ShowGenre {
  genreName: string;
  shows: Show[];
}

