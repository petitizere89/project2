import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeGuard } from './gurads/home.guard';
import { InventoryComponent } from './components/inventory/inventory.component';
import { CustomerInventoryComponent } from './components/customer-inventory/customer-inventory.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent, canActivate: [HomeGuard]},
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignupPageComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'managerhome', component:ManagerHomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'viewinventory', component:InventoryComponent},
  {path: 'customerinventory', component:CustomerInventoryComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
