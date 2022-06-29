import { Component, OnInit } from '@angular/core';
import { BoardGameOrder } from '../shared/models/boardgameorder.model';
import { Game } from '../shared/models/boardgameviaapi.model';
import { ShoppingCartService } from '../shared/services/shoppingcart.service';

@Component({
  selector: 'app-boardgame-orders',
  templateUrl: './boardgame-orders.component.html',
  styleUrls: ['./boardgame-orders.component.css']
})
export class BoardgameOrdersComponent implements OnInit {
  currentOrders:BoardGameOrder[] = [];
  totalPrice:number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.shoppingCartBus$.subscribe((boardgame: Game) => this.processOrder(boardgame))
  }

  processOrder(boardgame: Game) {
    this.currentOrders.push(new BoardGameOrder(boardgame))
  }

}
