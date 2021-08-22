import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from 'src/app/Items';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


export class Item {
  constructor(
    public itemName: string,
    public price: number,
    public description: string,
    public category: null,
    public quantity: number
  ) {
  }
}

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items: Item[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getitems();

  }
  getitems(){
    this.httpClient.get<any>('http://localhost:8080/items/getitems')
    .subscribe(
      response => {
        console.log(response);
        this.items = response;
      }
    );

    }

}

