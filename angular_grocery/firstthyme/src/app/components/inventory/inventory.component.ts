import { Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from 'src/app/Items';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ItemsService } from 'src/app/services/items.service'
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
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  // @Input() items: Items ={
    itemId: number = 0;
    itemName: string= '';
    price: number = 0; 
    description: string= '';
    category: string= '';
    quantity: number=0;
  // }

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



  createItem(itemName:string, price:number, description:string, category: string, quantity: number) {
    return this.httpClient.post<String>("http://localhost:8080/items/createitem", JSON.stringify({itemName, price, description, category,quantity}),{   
      headers: {
          'Content-Type': 'application/json',
        }
      })
    .pipe(catchError((e) => {
      return throwError(e);
    }))
    .subscribe(() => true);
    this.getitems();
  }

  onSubmit(): void{
    this.createItem(this.itemName,this.price,this.description, this.category, this.quantity);
    this.router.navigateByUrl('/managerhome');
  }

}

