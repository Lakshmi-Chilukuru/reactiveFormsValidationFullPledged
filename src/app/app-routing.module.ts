import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',redirectTo: 'dashboard',pathMatch:'full'
  },
  {
    path:'create',component:CreateComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'update/:id',component:UpdateComponent
  },
  {
    path:'view/:id',component:ViewComponent
  },
  {
    path: '**' , component:AppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
