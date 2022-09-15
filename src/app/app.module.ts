import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CenterLeftComponent } from './center-left/center-left.component';
import { CenterRightComponent } from './center-right/center-right.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoPageComponent } from './no-page/no-page.component'; 
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterLeftComponent,
    CenterRightComponent,
    CreateDataComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        timeOut:2000,
        progressBar:true,
        progressAnimation:"increasing",
  
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
