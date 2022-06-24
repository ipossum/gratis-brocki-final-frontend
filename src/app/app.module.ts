import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiModule} from "./openapi-gen";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
