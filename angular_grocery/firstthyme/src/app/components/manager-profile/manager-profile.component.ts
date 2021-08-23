import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  oldUsername: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  userRole: object = {userrole:''};
  userrole: string = '';

  error: boolean = false;

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


  constructor(private http: HttpClient, private router:Router) { }

  onSubmit(): void{
    this.update(this.oldUsername, this.username, this.email, this.password);
  }

  ngOnInit(): void {

  }

}
