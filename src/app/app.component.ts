import { Component } from '@angular/core';
import { BoardGame } from './shared/models/boardgame.model';
import { BoardGamesViaAPI, Game } from './shared/models/boardgameviaapi.model';
import { GhibliFilm } from './shared/models/ghiblifilm.model';
import { BoardGameService } from './shared/services/boardgame.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boardgames: BoardGame[];
  // ghiblifilms!: GhibliFilm[];
  // boardgamesviaapi!: BoardGamesViaAPI;
  boardgamesviaapi!: Game[]
  currentBoardGame!: Game

  constructor(private boardgameService: BoardGameService){
    this.boardgames = this.boardgameService.boardgames;
        
    // this.boardgameService.getFilms().subscribe(
    //   data=>this.ghiblifilms=data
    // )
    
    this.boardgameService.getBoardGames().subscribe(
      data=>this.boardgamesviaapi=data.games
    )

  }

  setCurrentGame(selectedGame: Game) {
    console.dir(selectedGame);
    this.currentBoardGame = selectedGame;
    this.currentBoardGame.rating = 0;
    this.currentBoardGame.showrating = false;
  }

  setComment(comment: string) {
    this.currentBoardGame.comment = comment;
  }

  updateRating(rating: any) {
    this.currentBoardGame.rating += +rating;
    this.currentBoardGame.showrating = true;
  }

  showRating(boardgame: Game) {
    return boardgame.showrating;
  }
}
