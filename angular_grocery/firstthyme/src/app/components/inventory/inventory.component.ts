import { Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from 'src/app/Items';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ItemsService } from 'src/app/services/items.service'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


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
    userId: number = 0; 

  // @Input() items: Items ={
    itemId: number = 0;
    itemName: string= '';
    price: number = 0; 
    description: string= '';
    category: string= '';
    quantity: number=0;
  // }

  items: Item[] = [];
  constructor(private httpClient: HttpClient, private router:Router, private userService:UserService,) { }
 
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

additem(username: any, itemId: number){
  return this.httpClient.post<String>("http://localhost:8080/cart/additem", JSON.stringify({username, itemId}),{
    headers: {
    'Content-Type': 'application/json',
      }
    })
  .pipe(catchError((e) => {
    return throwError(e);
  }))
  .subscribe(() => true);
} 

upateItem(itemName: string, quantity: number){
  return this.httpClient.post<String>("http://localhost:8080/items/updateitem", JSON.stringify({itemName, quantity}),{
    headers:{
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
    if((this.price ==0)&&(this.description =='')){
      this.upateItem( this.itemName,this.quantity );
    }else{
      this.createItem(this.itemName,this.price,this.description, this.category, this.quantity);
    }
     this.router.navigateByUrl('/managerhome');
  }
  
  
  

  onAddItem(): void{
   let username = localStorage.getItem('username');
    console.log(username);
    this.additem(username, this.itemId);
    this.router.navigateByUrl('/cart');
  }
}
