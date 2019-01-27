import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ABookComponent } from './books/a-book/a-book.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FunStuffComponent } from './fun-stuff/fun-stuff.component';
import { MenuComponent } from './menu/menu.component';
import { BookDialogComponent } from './books/book-dialog/book-dialog.component';

const appRoutes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fun-stuff', component: FunStuffComponent},
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  { path: '**', component: BooksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ABookComponent,
    HomeComponent,
    AboutComponent,
    FunStuffComponent,
    MenuComponent,
    BookDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatChipsModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BookDialogComponent]
})
export class AppModule { }
