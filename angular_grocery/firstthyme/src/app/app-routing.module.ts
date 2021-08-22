import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeGuard } from './gurads/home.guard';

const routes: Routes = [
  {path:'home', component:HomePageComponent, canActivate: [HomeGuard]},
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignupPageComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'managerhome', component:ManagerHomeComponent},
  {path: 'cart', component:CartComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
