export enum BookSeries {
    'Alex Craft',
    'Heaven',
    'One-shot',
}

export interface IBook {


    name: string;
    series: BookSeries;
    imagePath: string;
    description: string[];
    firstChapter: string;


}
