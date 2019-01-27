import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog , MAT_DIALOG_DATA } from '@angular/material';
import { inject } from '@angular/core/testing';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Book) { }

  ngOnInit() {
  }

}
