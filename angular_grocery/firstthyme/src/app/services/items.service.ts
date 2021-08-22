import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Items } from '../Items';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  items: Items[] = [];
  subject: Subject<Items[]> = new Subject<Items[]>();

  constructor(private http: HttpClient) { }

  additem(userId: number, itemId: number){
    return this.http.post('http://localhost:8080/cart/additem', JSON.stringify({userId, itemId}),{
      headers: {
        'Content-Type': 'application/json'
    }})
    .pipe(catchError((e) =>{
      return throwError(e);
    }));
  
  }

  getitems(){
    this.http.get<Items[]>('http://localhost:8080/items/getitems')
    .subscribe(
      response => {
        //console.log(response);
        this.items = response;
      }
    );
    }

}


