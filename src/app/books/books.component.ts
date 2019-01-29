import { Component, OnInit, HostListener  } from '@angular/core';
import { MatDialog } from '@angular/material';

import { IBook, BookSeries} from '../shared/book.model';
import { ABookComponent } from './a-book/a-book.component';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  private errorMessage: any;

  public innerWidth: any;
  public selectedBook = '';

  public books: IBook[];
  // = [
  //     { 'name': 'Grave Witch',
  //       'series': BookSeries['Alex Craft'],
  //       'imagePath': '../../assets/Images/GraveWitch.jpg',
  //       'description': [
  //           'Grave witch Alex Craft can speak to the dead, but that doesn’t mean she likes what they have to say . . . ',
             // tslint:disable-next-line:max-line-length
  //           `As a private investigator and consultant for the police, Alex Craft has seen a lot of dark magic. But even though she’s on good terms with Death himself—who happens to look fantastic in a pair of jeans—nothing has prepared her for her latest case. Alex is investigating a high profile murder when she’s attacked by the ‘shade’ she’s raising, which should be impossible. To top off her day, someone makes a serious attempt on her life, but Death saves her. Guess he likes having her around . . .`,
            // tslint:disable-next-line:max-line-length
  //           `To solve this case Alex will have to team up with tough homicide detective Falin Andrews. Falin seems to be hiding something—though it’s certainly not his dislike of Alex—but Alex knows she needs his help to navigate the tangled webs of mortal and paranormal politics, and to track down a killer wielding a magic so malevolent, it may cost Alex her life . . . and her soul.`
  //       ],
  //       'firstChapter': 'http://kalayna.com/GWExcerpt.html'
  //     },
  //     {
  //       'name': 'Grave Dance',
  //       'series': BookSeries['Alex Craft'],
  //       'imagePath': '../../assets/Images/GraveDancethumb.jpg',
  //       'description': [
  //           'Whoever said dead men tell no tales obviously never met Alex Craft.',
             // tslint:disable-next-line:max-line-length
  //           'After a month spent recovering from a vicious fight with a sorcerer, grave witch Alex Craft is ready to get back to solving murders by raising the dead. With her love life in turmoil thanks to the disappearance of Fae Investigation Bureau agent Falin Andrews and a shocking “L” word confession from Death himself, Alex is eager for the distractions of work. But her new case turns out to be a deadly challenge.',
             // tslint:disable-next-line:max-line-length
  //           'The police hire Alex to consult on a particularly strange investigation in the nature preserve south of Nekros City. The strange part: There are no corpses, only fragments of them. A serial killer is potentially on the loose, and Alex has no way to raise a shade without a body, so she’ll have to rely on the magic of others to find leads. But as she begins investigating, a creature born of the darkest magic comes after her. Someone very powerful wants to make sure the only thing she finds is a dead end—her own.'
  //       ],
  //       'firstChapter': 'http://kalayna.com/excerptGD.html'
  //     },
  //     {
  //       'name': 'Grave Memory',
  //       'series': BookSeries['Alex Craft'],
  //       'imagePath': '../../assets/Images/GraveMemory.jpg',
  //       'description': [
  //         'When the dead need to talk, Alex Craft is always ready to listen…',
           // tslint:disable-next-line:max-line-length
  //         'As a Grave Witch, Alex solves murders by raising the dead—an ability that comes at a cost, and after her last few cases, that cost is compounding. But her magic isn’t the only thing causing havoc in her life. While she’s always been on friendly terms with Death himself, things have recently become a whole lot more close and personal. Then there’s her sometime partner, agent Falin Andrews, who is under the glamour of the Winter Queen. To top everything off, her best friend has been forever changed by her time spent captive in Faerie.',
           // tslint:disable-next-line:max-line-length
  //         'But the personal takes a backseat to the professional when a mysterious suicide occurs in Nekros City and Alex is hired to investigate. The shade she raises has no memory of the days leading up to his brutal ending, so despite the very public apparent suicide, this is murder. But what kind of magic can overcome the human will to survive? And why does the shade lack the memory of his death? Searching for the answer might mean Alex won’t have a life to remember at all…'
  //       ],
  //       'firstChapter': 'http://kalayna.com/excerptGM.html'
  //     },
  //     {
  //       'name': 'Grave Vision',
  //       'series': BookSeries['Alex Craft'],
  //       'imagePath': '../../assets/Images/GraveVisions.jpg',
  //       'description': [
  //         `If a girl can't trust the dead, who can she trust?`,
           // tslint:disable-next-line:max-line-length
  //         `If you want to hear voices from the dead in Nekros City, you call Alex Craft. She’s a grave witch with reasonable rates and extraordinary powers who specializes in revealing the secrets of the dead. But now she’s the one fighting to keep her own secret. She’s not human—and her newly discovered heritage is causing havoc for her both in the human realm and in Faerie.`,
           // tslint:disable-next-line:max-line-length
  //         `But her status as an unaffiliated fae also makes her an ideal candidate to investigate a new street drug that has surfaced in several of the spaces between the human and fae worlds. This glamour-infused drug causes hallucinations that turn real—at least for a while and often with deadly consequences. Searching for the source of this drug—and its purpose—lands Alex front and center in the conflict brewing in Faerie, and she must find answers before she’s dragged so deep that she loses her freedom.`
  //       ],
  //       'firstChapter': 'http://kalayna.com/excerptGV.html'
  //     },
  //     {
  //       'name': 'Grave Ransom',
  //       'series': BookSeries['Alex Craft'],
  //       'imagePath': '../../assets/Images/GraveRansom.jpg',
  //       'description':  [
            // tslint:disable-next-line:max-line-length
  //         `Grave witch Alex Craft is no stranger to the dead talking. She raises shades, works with ghosts, and is dating Death himself. But the dead walking? That’s not supposed to happen. And yet reanimated corpses are committing crimes across Nekros City.`,
            // tslint:disable-next-line:max-line-length
  //         `Alex’s investigation leads her deep into a web of sinister magic. When Briar Darque of the Magical Crimes Investigation Bureau gets involved, Alex finds herself with an unexpected ally of sorts. But as the dead continue to rise and wreak havoc on the living, can she get to the soul of the matter in time?`
  //       ],
  //       'firstChapter': 'http://kalayna.com/excerptGR.html'
  //     }
  // ];

  constructor(public dialog: MatDialog, public bookService: BookService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.bookService.getAllBooks().subscribe(
      books => this.books = books,
      error => this.errorMessage = <any>error
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  handleSelected(name: string): void {
    if (this.innerWidth < 700) {
    this.selectedBook = name;
  } else {
    const modwidth = this.innerWidth * 0.75;
    const modSelect = this.books.find( x => x.name === name);
    const dialogRef = this.dialog.open(BookDialogComponent, {
      data: modSelect
    });
  }
  }

}

