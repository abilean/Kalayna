import { Component, OnInit } from '@angular/core';
import { IBook } from '../../shared/book.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-a-book',
  templateUrl: './a-book.component.html',
  styleUrls: ['./a-book.component.css']
})
export class ABookComponent implements OnInit {
  public myBook: IBook;
  public seeChapter: Boolean = false;
  // public chapter: string[];

  private errorMessage: any;

  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit() {
    let name: string;
    this.route.paramMap.subscribe(
      (params: ParamMap) => (name = params.get('name'))
    );
    this.service
      .getBook(name)
      .subscribe(
        book => (this.myBook = book),
        error => (this.errorMessage = <any>error)
      );
  }
}
