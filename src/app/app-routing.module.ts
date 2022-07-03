import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ItemCreationComponent} from "./item-creation/item-creation.component";
import {ItemUpdateComponent} from "./item-update/item-update.component";
import {SignupUpdateComponent} from "./signup-update/signup-update.component";
import {ItemComponent} from "./item/item.component";
import {ImageUploadComponent} from "./image-upload/image-upload.component";

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup/update/:id',
    component: SignupUpdateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'item/creation',
    component: ItemCreationComponent
  },
  {
    path: 'item/update/:id',
    component: ItemUpdateComponent
  },
  {
    path: 'items/:id',
    component: ItemComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'images',
    component: ImageUploadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
