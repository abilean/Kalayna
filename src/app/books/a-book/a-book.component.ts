import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from '../book.model';


@Component({
  selector: 'app-a-book',
  templateUrl: './a-book.component.html',
  styleUrls: ['./a-book.component.css']
})
export class ABookComponent implements OnInit {

  @Input() myBook: Book;
  @Input() selected: Boolean = false;
  @Output() OnSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.myBook.name);
  }

  handleClick(): void {
    this.OnSelected.emit(this.selected ? '' : this.myBook.name);
  }

}
