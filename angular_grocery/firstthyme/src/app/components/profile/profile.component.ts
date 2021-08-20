import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

show:boolean = false;

toogleTag(){
  this.show = !this.show;
}

// Add functions that hide/replace the profile cards on click 

  constructor() { }

  ngOnInit(): void {
  }

}
