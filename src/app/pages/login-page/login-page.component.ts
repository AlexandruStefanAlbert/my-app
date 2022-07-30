import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  showPassword: boolean = false;

  isUser: boolean = false;
  users : User[]=[];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(value=>{
      this.users=value;

      this.users.forEach(data=>{
        console.log(data);
      })

    })

  }

  login()
  {

  }

  showHidePassword() {
    this.showPassword = !this.showPassword;

  }
}

