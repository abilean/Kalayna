import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kalayna';

  public constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.addSvgIcon(
      'facebook-box',
      domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/facebook.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'twitter',
      domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/twitter.svg')
    );
    matIconRegistry.addSvgIcon(
      'book',
      domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/book-open-page-variant.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'youtube',
      domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/youtube.svg')
    );
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
