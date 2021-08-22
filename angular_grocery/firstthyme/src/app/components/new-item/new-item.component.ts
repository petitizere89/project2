import { Component, OnInit, Output } from '@angular/core';
import { Items } from 'src/app/Items';
import { ItemsService } from 'src/app/services/items.service';
import { EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @Output() onAddItems: EventEmitter<Items> = new EventEmitter();
  userId: number = 0;
  itemId: number = 0;
  itemName: string = '';
  price: number = 0;
  description: string = '';
  category: null;
  quantity: number = 0;


  constructor(private userService:UserService) { }
  

  onSubmit(){

    const newItem: Items ={
      itemId: this.itemId,
      itemName: this.itemName,
      price: this.price,
      description: this.description,
      category: null,
      quantity: this.quantity
    }

    this.onAddItems.emit(newItem);
  }



  ngOnInit(): void {
  }

}
