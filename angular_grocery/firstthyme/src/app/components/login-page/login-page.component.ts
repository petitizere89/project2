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
  userRole: object = {userrole:''};
  userrole: string = '';
  error: boolean = false;

  constructor(private userService:UserService, private router:Router) { }

  onSubmit(): void{
    console.log(this.username, this.password);
    this.userService.login(this.username, this.password, this.userrole)
      .subscribe(data => {
        console.log(data);
        this.userService.user = {
        id: data.id,
        username: data.username,
        userRole: data.userRole,
      }
      localStorage.setItem('username', this.username);
      // console.log(localStorage.getItem('username'));
      this.error = false;
      if(data.userRole == "MANAGER"){
        this.router.navigateByUrl('/managerhome');
      } else{
        this.router.navigateByUrl('/home');
      }

    },
      (error) => this.error=true);
  }
  

  ngOnInit(): void {

  }

}
