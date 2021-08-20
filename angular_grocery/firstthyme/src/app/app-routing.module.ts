import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignupPageComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'managerhome', component:ManagerHomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
