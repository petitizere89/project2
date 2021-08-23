import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  user:User = {
    id: 0,
    username: ''
    
  }

  login(username:string, password: string, userRole: string): Observable<User>{
    return this.http.post<User>("http://localhost:8080/users/login", JSON.stringify({username: username, password: password, userRole: userRole}),{ 
    headers: {
      'Content-Type': 'application/json'
    }})
    .pipe(catchError((e) => {
      return throwError(e);
    }));
  }


  signup(firstName:string, lastName:string, email:string, password: string) {
    return this.http.post<String>("http://localhost:8080/users/signup", JSON.stringify({firstName, lastName, email, password}),{   
      headers: {
          'Content-Type': 'application/json',
        }
      })
    .pipe(catchError((e) => {
      return throwError(e);
    }))
    .subscribe(() => true);
    
  }

   constructor(private http: HttpClient) { }
}
