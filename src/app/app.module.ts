import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { AppService } from './app.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
