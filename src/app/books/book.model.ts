export enum BookSeries {
    'Alex Craft',
    'Heaven',
    'One-shot',
}

export interface Book {


    name: string;
    series: BookSeries;
    imagePath: string;
    description: string[];
    firstChapter: string;


}
