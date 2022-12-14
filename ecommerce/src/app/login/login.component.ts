import { User } from './../modal/Modal';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  progressBar = false;
  user: User = {} as User;
  username: any;
  password: any;

  constructor(private userService: UserService, private router:Router) {

  }
  ngOnInit(): void {

  }

  addUser() {
    this.progressBar = true;
    console.log(this.username)
    this.userService.addUser(this.user).subscribe(user => {
      this.user = user;
      this.userService.saveUsername(user.username);
      window.location.replace("/")
    });
  }

}