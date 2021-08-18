import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { User } from '../User';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  user:User = {
    id: 0,
    username: '',
    
  }

  login(username:string, password: string): Observable<User>{
    return this.http.post<User>("http://localhost:8080/users/login", JSON.stringify({username, password}))
    .pipe(catchError((e) => {
      return throwError(e);
    }));
  }
  //  this.router.navigateByUrl('/home');

  signup(firstName:string, lastName:string, email:string, password: string): Observable<User>{
    return this.http.post<User>("http://localhost:8080/users/signup", JSON.stringify({firstName, lastName, email, password}))
    .pipe(catchError((e) => {
      return throwError(e);
    }));
  }

  // constructor(private router:Router, private location:Location){}
   constructor(private http: HttpClient) { }
}
