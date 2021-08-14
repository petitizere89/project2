import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private userService:UserService, private router:Router) { }

  onSubmit(): void{
    console.log(this.username, this.password);
    this.userService.login(this.username, this.password)
      .subscribe(data => {this.userService.user = {
        id: data.id,
        username: data.username
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
