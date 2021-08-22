import { Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from 'src/app/Items';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() items: Items ={
    itemId: 0,
    itemName: '',
    price: 0, 
    description: '',
    category: null,
    quantity: 0
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

}

