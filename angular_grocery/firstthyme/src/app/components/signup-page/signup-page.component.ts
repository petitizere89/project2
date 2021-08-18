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
    this.userService.signup(this.firstName, this.lastName, this.email, this.password)
      .subscribe(data => {this.userService.user = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        // username: data.username,
        password: data.password
      }
      this.error = false;
      //Is this the correct url?
      this.router.navigateByUrl('/home');
    },
      (error) => this.error=true);
  }

  ngOnInit(): void {
  }

}
