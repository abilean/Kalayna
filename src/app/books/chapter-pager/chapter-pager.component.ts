import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chapter-pager',
  templateUrl: './chapter-pager.component.html',
  styleUrls: ['./chapter-pager.component.scss']
})
export class ChapterPagerComponent implements OnInit {
  @Input() chapter: string[];
  @Input() lines = 10;

  currentPage = 1;
  currentChapter: string[];
  maxPage: number;

  constructor() {}

  ngOnInit() {
    if (this.lines <= 0) {
      this.lines = 1;
    }
    this.maxPage = this.chapter.length / this.lines;
    this.setUpChapter();
  }

  nextPage() {
    this.currentPage += 1;
    this.setUpChapter();
  }

  goBackPage() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage -= 1;
    this.setUpChapter();
  }

  private setUpChapter() {
    if (this.chapter) {
      this.currentChapter = this.chapter.slice(
        (this.currentPage - 1) * this.lines,
        this.currentPage * this.lines
      );
    }
  }
}
