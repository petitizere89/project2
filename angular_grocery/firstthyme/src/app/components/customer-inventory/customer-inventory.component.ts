import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  selector: 'customer-inventory',
  templateUrl: './customer-inventory.component.html',
  styleUrls: ['./customer-inventory.component.css']
})
export class CustomerInventoryComponent implements OnInit {

  itemId: number = 0;
  itemName: string= '';
  price: number = 0; 
  description: string= '';
  category: string= '';
  quantity: number=0;

  items: Item[] = [];
  constructor(private httpClient: HttpClient, private router:Router) { }

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
