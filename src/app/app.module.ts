import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardgamedetailComponent } from './boardgamedetail/boardgamedetail.component';
import { HttpClientModule } from '@angular/common/http'
import { ShoppingCartService } from './shared/services/shoppingcart.service';
import { BoardgameOrdersComponent } from './boardgame-orders/boardgame-orders.component'

@NgModule({
  declarations: [
    AppComponent,
    BoardgamedetailComponent,
    BoardgameOrdersComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
