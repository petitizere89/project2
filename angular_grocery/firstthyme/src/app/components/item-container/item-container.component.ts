import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/Items';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  item: Observable <Items[]> = new Observable<Items[]>();

  additem(userId:number,itemId:number): void{
    this.itemService.additem(userId, itemId);
    this.item = this.itemService.subject;
    
  }
  constructor(private itemService:ItemsService) { }

  ngOnInit(): void {
    this.itemService.getitems();
    this.item = this.itemService.subject;
  }

}
