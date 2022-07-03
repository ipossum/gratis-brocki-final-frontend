import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemComponent} from './item/item.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiModule} from "./openapi-gen";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignupComponent} from './signup/signup.component';
import {ItemCreationComponent} from "./item-creation/item-creation.component";
import {ItemUpdateComponent} from './item-update/item-update.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {SignupUpdateComponent} from './signup-update/signup-update.component';
import {ImageUploadComponent} from "./image-upload/image-upload.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    SignupComponent,
    ItemCreationComponent,
    ItemUpdateComponent,
    LoginComponent,
    HomeComponent,
    SignupUpdateComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'items/:itemId', component: ItemComponent },
      { path: 'signup/update/:userId', component: SignupUpdateComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
