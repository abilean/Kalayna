import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ABookComponent } from './books/a-book/a-book.component';
import { AboutComponent } from './about/about.component';
import { FunStuffComponent } from './fun-stuff/fun-stuff.component';
import { BlogComponent } from './blog/blog.component';
import { componentFactoryName } from '@angular/compiler';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', pathMatch: 'full', component: BooksComponent },
  { path: 'books/detail', component: ABookComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fun-stuff', component: FunStuffComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
