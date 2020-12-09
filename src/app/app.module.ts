import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewProductComponent } from './welcome/new-product/new-product.component';
import { SalesComponent } from './welcome/sales/sales.component';
import { CacheService } from './shared/cache.service';
import { ProductSearchPipe } from './shared/product-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NewProductComponent,
    SalesComponent,
    ProductSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  exports: [
    ProductSearchPipe
  ],
  providers: [CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
