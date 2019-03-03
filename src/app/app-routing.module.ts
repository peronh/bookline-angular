import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';
import {BookPeaceComponent} from './home/book-piece/book-piece.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'regisztracio', component: RegisterComponent },
    { path: 'belepes', component: LoginComponent },
    { path: 'konyvek',
      component: BooksComponent,
      canActivate: [AuthGuard]
       },
    { path: 'konyvek/:id', component: BookPeaceComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
