import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
//import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
