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

}


