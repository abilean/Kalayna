import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatDialogModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ABookComponent } from './books/a-book/a-book.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FunStuffComponent } from './fun-stuff/fun-stuff.component';
import { MenuComponent } from './menu/menu.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BookFilterPipe } from './books/book-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ABookComponent,
    HomeComponent,
    AboutComponent,
    FunStuffComponent,
    MenuComponent,
    BlogComponent,
    FooterComponent,
    HeaderComponent,
    BookFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatChipsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
