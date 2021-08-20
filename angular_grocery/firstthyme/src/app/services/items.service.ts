import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Items } from '../Items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Items[] = [];
  subject: Subject<Items[]> = new Subject<Items[]>();

  constructor(private http: HttpClient, private itemsService:ItemsService) { }
//Dont have in backend yet
  getItems(){

  }

  updateitem(){
    
  }

}
