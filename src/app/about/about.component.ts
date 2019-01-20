import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public faq: Questions[] = [
    {'question': `What is the origin of your name? How do you pronounce it?`,
      'anwsers': [`Kalayna (pronounced Kuh-LAY-nuh) has no particular origin, to my
      knowledge. Over the years, people have told me about many similar
      names/words in other languages. My favorite is a Russian berry which has
      to freeze before it is sweet enough to eat.`]},
    {'question': `Where do you get your ideas?`,
    'anwsers': [`This is the question I get the most, and unfortunately, it is the hardest
    to answer. I've blogged on ideas several times over the years. You can
    check those posts out <a href="http://kalayna.blogspot.com/2008/06/from-everywhere-and-plot-soup.html">HERE</a>,
    <a href="http://kalayna.blogspot.com/2009/06/eyes-open-characters.html"> HERE</a>,
     and <a href="http://community.livejournal.com/fangs_fur_fey/517593.html">HERE</a>.`]},
    {'question': `I'm a reviewer and I'd love to review your latest book on my blog/newspaper/etc. Can you send me an ARC?`,
    'anwsers': [`Thank you! I'm so glad you are interested enough in my books to want spend time reading and reviewing them.
     Unfortunately, if I receive ARCs (advance reader/review copies) they tend to arrive well after the date my publishers
     send them to reviewers and I receive far fewer than the number of requests I receive from people wanting to review them.
      My suggestion is to contact my publisher directly.`,
  `The publisher for my Alex Craft Novels is Ace/Roc and you can find information about requesting review copies
   <a href="http://us.penguingroup.com/static/pages/aboutus/mediainquiries.html">HERE</a>. `,
   `The publisher for my Haven novels is Bell Bridge Books and you can find information about requesting review copies
    <a href="http://bellbridgebooks.com">HERE</a>.` ]
  },
  {'question': `How many books will be in the Haven Series?`,
  'anwsers': [`Currently I have a plan for a total of six books following Kita's story.`]},
  {'question': `When will book three in the Novels of Haven, Third Blood, be released?`,
  'anwsers': [`THRID BLOOD's release was pushed back. I will update you as soon as I have more information about when this book
   should be released.`]},
   {'question': `How many books are planned for the Alex Craft Series?`,
  'anwsers': [`Currently Penguin has me contracted for six books. At this time, it looks like the sixth book will be the final
   and it has been planned as such. That said, I'm not opposed to exploring the world and characters beyond that point and
    I have a few spin off stories following secondary characters still on the back burner.`]},
  {'question': `Did/do you design your own covers?`,
  'anwsers': [`Nope! The very talented ladies over at Bell Bridge Books designed the covers for my Haven Series, and I have
   been absolutely thrilled with their work. The gorgeous art for GRAVE WITCH and GRAVE DANCE was created by the amazing
    illustrator Aleta Rafton. You can find more of her work HERE.`]},
    {'question': `I saw the Haven Series reviewed on a YA blog. Is it a YA series?`,
    'anwsers': [`The Haven Series is an adult urban fantasy. That said, I was only 23 when I wrote the first book,
     ONCE BITTEN, and Kita is a rather young character, so it is not surprising that there is crossover to the YA market.
      I'm thrilled that it appeals to younger readers, but as a disclaimer, I would like to reiterate that I am writing
       for an adult audience and the books do get darker and sexier as the series progresses.`
      ]},
      {'question': `Do you really hoop dance with fire?`,
      'anwsers': [`I do. You can check out my very first 'burn' <a href="http://www.youtube.com/watch?v=oOtJDPZ0iNw">Here</a>.`]}
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Questions {

    question: string;
    anwsers: string[];
}
