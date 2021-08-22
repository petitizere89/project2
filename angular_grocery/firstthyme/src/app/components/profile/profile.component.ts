import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

export class Users{
  constructor(
    public username: string,
    public email: string, 
    public password: string
  ){}
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  oldUsername: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  userRole: object = {userrole:''};
  userrole: string = '';

  error: boolean = false;

constructor(private http: HttpClient, private router:Router, private userService:UserService) { 

}

show:boolean = false;

toogleTag(){
  this.show = !this.show;
}

update(oldUsername:string, username:string, email:string, password:string){
  return this.http.post<String>("http://localhost:8080/users/update", JSON.stringify({oldUsername, username, email, password}),{ 
      headers: {
        'Content-Type': 'application/json'
      }})
  .pipe(catchError((e) => {
    return throwError(e);
  }))
  .subscribe(() => true);
}

  ngOnInit(): void {

  }

  onSubmit(): void{
    this.update(this.oldUsername, this.username, this.email, this.password);
  }


}