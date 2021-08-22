import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { CartComponent } from './components/cart/cart.component';
import { NavBarManagerComponent } from './components/nav-bar-manager/nav-bar-manager.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { UserService } from './services/user.service';

export class inventory {
  constructor(
    public itemName: string,
    public price: number,
    public description: string,
    public category: null,
    public quantity: number
  ) {
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomePageComponent,
    ServicesComponent,
    NavBarComponent,
    ProfileComponent,
    ManagerHomeComponent,
    CartComponent,
    NavBarManagerComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
