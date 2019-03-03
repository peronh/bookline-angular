import { Injectable } from '@angular/core';
import { User} from './user.model';
import { Login} from './login.model';
import * as firebase from 'firebase';
import {ToastrService} from 'ngx-toastr';
import { AngularFireAuth } from "@angular/fire/auth";
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    public isLoggedIn = false;
    formData: User;
    formLoginData: Login;

    constructor( private toastr: ToastrService,
                 private afAuth: AngularFireAuth,
                 private router: Router,) {}

    signUp(email:string , password:string) {
        // noinspection TypeScriptUnresolvedFunction
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            reponse =>  this.router.navigate(['/belepes'])
        ).catch(
            err =>   this.toastr.warning('Ügyeljen a helyes kitöltésre! \t\t\t Valós e-mail címet adjon meg, és a jelszó minimum 6 karakter legyen!',  'Bookline'),
        );
    }

     login(email:string , password:string) {
        // noinspection TypeScriptUnresolvedFunction
        firebase.auth().signInWithEmailAndPassword(email, password).then(
             reponse => ( this.isLoggedIn = true),
         console.log('sikeres bejelentkezés')
        ).catch(
            err =>   this.toastr.warning('nem megfelelő e-mail, vagy jelszó',  'Bookline'),
          );
    }

    logout() {
        console.log('kilépés sikeres');
        this.isLoggedIn = false;
    }

}

