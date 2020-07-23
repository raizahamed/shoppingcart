import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductsComponent } from './shoppingcart/products/products.component';
import { OrdersComponent } from './shoppingcart/orders/orders.component';
import { CartComponent } from './shoppingcart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    ProductsComponent,
    OrdersComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingcartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
