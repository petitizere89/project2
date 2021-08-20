import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from 'src/app/Items';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() item: Items = {
    itemName: '',
    price: 0,
    description: '',
    category: null,
    quantity: 0
  }

  items: Observable<Items[]> = new Observable<Items[]>();

  constructor(private itemsService:ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getitems();
    this.items = this.itemsService.subject;

  }

}
