import { Component, OnInit, HostListener } from "@angular/core";
import { MatDialog } from "@angular/material";

import { IBook } from "../shared/book.model";
import { BookService } from "../shared/book.service";
import { Router } from "@angular/router";
import { serializePaths } from "@angular/router/src/url_tree";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  private errorMessage: any;

  public selectedBook = "";

  public books$: IBook[];
  public series = ["Alex Craft", "Haven", "Misc"];

  constructor(
    public dialog: MatDialog,
    public bookService: BookService,
    public router: Router
  ) {}

  ngOnInit() {
    this.bookService
      .getAllBooks()
      .subscribe(
        books => (this.books$ = books),
        error => (this.errorMessage = <any>error)
      );
  }

  handleSelected(bookName: string): void {
    console.log(this.series);
    this.router.navigate(["/books/detail", { name: bookName }]);
  }

  getSeries(): string[] {
    this.books$.forEach(book => {
      //check if the books series is not already in series, and then add it
      if (!this.series.includes(book.series)) {
        this.series.push(book.series);
      }
    });
    return this.series;
  }
}
