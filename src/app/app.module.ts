import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './home/home/carousel/carousel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { BlogComponent } from './blog/blog.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { EducationalresourcesComponent } from './educationalresources/educationalresources.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    AboutusComponent,
    ProductsComponent,
    BlogComponent,
    TestimonalsComponent,
    EducationalresourcesComponent,
    NewsletterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,RouterModule,  
    AppRoutingModule, CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
