import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private userService:UserService, private router:Router) { }

  onSubmit(): void{
    console.log(this.firstName, this.lastName, this.email, this.password);
    if(this.userService.signup(this.firstName, this.lastName, this.email, this.password)){
        this.router.navigateByUrl('/home');
    }
  }

  ngOnInit(): void {
  }

}
