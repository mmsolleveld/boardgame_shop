import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../shared/models/boardgameviaapi.model';
import { ShoppingCartService } from '../shared/services/shoppingcart.service';

@Component({
  selector: 'app-boardgamedetail',
  templateUrl: './boardgamedetail.component.html',
  styleUrls: ['./boardgamedetail.component.css']
})
export class BoardgamedetailComponent {
  @Input() boardGameForDetails!: Game;
  @Output() commentEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() ratingEmitter: EventEmitter<number> = new EventEmitter<number>();
  
  giveComment(comment: string) {
    this.commentEmitter.emit(comment);
  }

  addRate(rating_update: any) {
    this.ratingEmitter.emit(rating_update);
  }

  constructor(private shoppingCartService: ShoppingCartService) {}

  order(boardgame: Game) {
    this.shoppingCartService.shoppingCartBus$.next(boardgame);
  }
}
