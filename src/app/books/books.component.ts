import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';

import { IBook } from '../shared/book.model';
import { BookService } from '../shared/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  private errorMessage: any;

  public innerWidth: any;
  public selectedBook = '';

  public books$: IBook[];

  constructor(
    public dialog: MatDialog,
    public bookService: BookService,
    public router: Router
  ) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.bookService
      .getAllBooks()
      .subscribe(
        books => (this.books$ = books),
        error => (this.errorMessage = <any>error)
      );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  handleSelected(bookName: string): void {
    this.router.navigate(['/books/detail', { name: bookName }]);
  }
}
