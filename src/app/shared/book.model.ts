export enum BookSeries {
  'Alex Craft',
  'Heaven',
  'One-shot'
}

export interface IBook {
  name: string;
  series: BookSeries;
  imagePath: string;
  description: string[];
  genre: string;
  isbn: string;
  publisher: string;
  stores: IMerchant[];
  audio: IMerchant[];
  foreign: IMerchant[];
  firstChapter: string[];
}

export interface IChapter {
  name: string;
  firstChapter: string[];
}

export interface IMerchant {
  name: string;
  link: string;
}
