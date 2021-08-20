import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Items } from '../Items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Items[] = [];
  subject: Subject<Items[]> = new Subject<Items[]>();

  constructor(private http: HttpClient) { }
//Dont have in backend yet
  // getItems(){

  // }

  // updateitem(){
    
  // }

  getitems(){
    return this.http.get<Items[]>('http://localhost:8080/items/getitems')
    .pipe(
      catchError((e) => {
        return throwError(e);
      }))
      .subscribe(
        (data) => {
          console.log(data);
          this.items = data;
          this.subject.next(this.items);
        }
      )
    }
  }


