import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/User';

export class user{
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public username: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users!: user; 

constructor(private http: HttpClient) { 

}

show:boolean = false;

toogleTag(){
  this.show = !this.show;
}

update(firstName:string, lastName:string, email:string, password: string): Observable<User>{
  return this.http.post<User>("http://localhost:8080/users/update", JSON.stringify({firstName, lastName, email, password}),{ 
      headers: {
        'Content-Type': 'application/json'
      }})
  .pipe(catchError((e) => {
    return throwError(e);
  }));
}

  ngOnInit(): void {

  }

}
