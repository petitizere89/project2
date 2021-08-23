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
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { CustomerInventoryComponent } from './components/customer-inventory/customer-inventory.component';
import { StorageServiceModule } from  'ngx-webstorage-service';
import { DisplayImageComponent } from './display-image/display-image.component';

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
    InventoryComponent,
    ItemContainerComponent,
    NewItemComponent,
    CustomerInventoryComponent,
    DisplayImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
