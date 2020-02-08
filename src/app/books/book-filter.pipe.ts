import { Pipe, PipeTransform } from "@angular/core";
import { IBook } from "../shared/book.model";

@Pipe({
  name: "bookFilter"
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[], series: string): any {
    if (!books || !series) {
      return books;
    }
    // filter book array, books in the series match and return true will be
    // kept, false will be filtered out
    return books.filter(item => item.series.indexOf(series) !== -1);
  }
}
