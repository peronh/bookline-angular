import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // public  isLoggedIn = false;

  constructor(public userService: UserService,) { }

  ngOnInit() {
  }

    logout() {
        this.userService.logout();
        this.userService.isLoggedIn = false;
    }



}
