import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

// user: any;
//   @Input('user')
//   userObj!: User;

constructor() { 

}

show:boolean = false;

toogleTag(){
  this.show = !this.show;
}

// Add functions that hide/replace the profile cards on click 



  ngOnInit(): void {
    // this.user = {
    //   username : this.userObj.username,
    //   firstname : this.userObj.firstName,
    //   lastname: this.userObj.lastName,
    //   email: this.userObj.email
    // }

  }

}
