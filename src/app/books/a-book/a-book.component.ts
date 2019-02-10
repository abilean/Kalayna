import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../../shared/book.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-a-book',
  templateUrl: './a-book.component.html',
  styleUrls: ['./a-book.component.css']
})
export class ABookComponent implements OnInit {
  public myBook: IBook;
  @Input() selected: Boolean = false;

  private errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService
  ) {}

  ngOnInit() {
    let name: string;
    this.route.paramMap.subscribe(
      (params: ParamMap) => (name = params.get('name'))
    );
    console.log('nothing ' + name);
    this.service
      .getBook(name)
      .subscribe(
        book => (this.myBook = book),
        error => (this.errorMessage = <any>error)
      );
    // this.myBook = books$.find(book => book.name === name);
    // .find(book => book.name === name)
  }
}
