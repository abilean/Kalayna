import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ABookComponent } from './books/a-book/a-book.component';
import { AboutComponent } from './about/about.component';
import { FunStuffComponent } from './fun-stuff/fun-stuff.component';

const routes: Routes = [
  { path: 'books', pathMatch: 'full', component: BooksComponent },
  { path: 'books/detail', component: ABookComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fun-stuff', component: FunStuffComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
