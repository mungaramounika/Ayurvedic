import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { BlogComponent } from './blog/blog.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { EducationalresourcesComponent } from './educationalresources/educationalresources.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"navbar",component:NavbarComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"products",component:ProductsComponent},
  {path:"blog",component:BlogComponent},
  {path:"testimonals",component:TestimonalsComponent},
  {path:"educationalresources",component:EducationalresourcesComponent},
  {path:"newsletter",component:NewsletterComponent},
  {path:"header",component:HeaderComponent}
];
@NgModule({
  declarations: [],
  imports: [ BrowserModule,CommonModule,RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
