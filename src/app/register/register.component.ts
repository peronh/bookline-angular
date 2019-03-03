import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {ToastrService} from 'ngx-toastr';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice: UserService,
              private firestore: AngularFirestore,
              private toastr: ToastrService,
              private router: Router) {
                }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.resetForm();
        this.userservice.formData = {
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    register(password: string, confirmPassword: string) {
        if ( password != confirmPassword ) {
            this.toastr.warning('A jelszó nem egyezik',  'Bookline');
            return false;
        }
    }

    onSubmit(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.userservice.signUp(email, password);
        // this.router.navigate(['/belepes']);
    }
}
