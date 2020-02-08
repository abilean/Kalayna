export interface IBook {
  name: string;
  series: string;
  bookNumber: string;
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
