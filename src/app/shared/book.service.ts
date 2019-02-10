import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBook } from './book.model';
import { Observable, throwError, of, observable } from 'rxjs';
import { catchError, tap, map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookURL = 'api/books.json';

  private books: IBook[];
  private books$: Observable<IBook[]>;

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<IBook[]> {
    if (this.books) {
      return of(this.books);
    } else if (this.books$) {
      return this.books$;
    } else {
      this.books$ = this.http
        .get<IBook[]>(this.bookURL, { observe: 'response' })
        .pipe(
          map(response => {
            this.books$ = null;
            this.books = response.body;
            return this.books;
          }),
          // tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError),
          share()
        );
      return this.books$;
    }
  }

  getBook(name: string): Observable<IBook> {
    return this.getAllBooks().pipe(
      map((books: IBook[]) => books.find(b => b.name === name))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred:  ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
