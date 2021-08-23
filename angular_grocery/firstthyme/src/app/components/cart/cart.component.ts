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
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  show:boolean = false;

toogleTag(){
  this.show = !this.show;
}
 // @Input() items: Items ={
  itemId: number = 0;
  itemName: string= '';
  price: number = 0; 
  description: string= '';
  category: string= '';
  quantity: number=0;
// }

items: Item[] = [];
constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
