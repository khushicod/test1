import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:"",redirectTo:"/signin",pathMatch:"full"
  },
  {
    path:"signin",component:SigninComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"error",component:ErrorComponent
  },
  {
    path:"layout",component:LayoutComponent,
    children:[
      {
        path:"dashboard",component:DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
