import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment} from '../environments/environment';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookService} from './shared/book.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookPeaceComponent } from './home/book-piece/book-piece.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService} from './shared/user.service';
import { AuthGuard} from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    BookListComponent,
    HomeComponent,
    NavbarComponent,
    BookPeaceComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [BookService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
