import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AuthgurdGuard } from './authgurd.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule),
    canActivate: [AuthgurdGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
   {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
