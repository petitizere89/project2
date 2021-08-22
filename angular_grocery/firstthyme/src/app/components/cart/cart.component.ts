import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
