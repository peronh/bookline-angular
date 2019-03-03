import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    list: Login[];

  constructor(private userservice: UserService,
              private firestore: AngularFirestore,
              private toastr: ToastrService,
              private router: Router,) { }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(loginForm?: NgForm) {
        if (loginForm != null)
            loginForm.resetForm();
        this.userservice.formLoginData = {
            email: '',
            password: '',
        };
    }

    onSubmit(form: NgForm){
      const email = form.value.email;
      const password = form.value.password;
      this.userservice.login(email, password);
      this.router.navigate(['/home'])
    }
}
