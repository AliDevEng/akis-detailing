export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  price: number;
}

export type GalleryImage = string | { src: string; alt?: string };

export interface ShowcaseImage {
  src: string;
  label: string;
}
