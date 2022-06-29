import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BoardGame } from "../models/boardgame.model";
import { GhibliFilm } from "../models/ghiblifilm.model";
import { BoardGamesViaAPI } from "../models/boardgameviaapi.model";

@Injectable({
    providedIn: 'root'
})
export class BoardGameService {
    boardgames: BoardGame[];
    
    constructor(private http: HttpClient){
        this.boardgames = [
            new BoardGame('Paleo', 2020, 1, 4, 45, 60, 10),
            new BoardGame('Gloomhaven', 2017, 1, 4, 60, 120, 14),
            new BoardGame('Qwirkle', 2006, 2, 4, 45, 45, 6),
            new BoardGame('The Quacks of Quedlinburg', 2018, 2, 4, 45, 45, 10)
        ];

    }

    // getFilms(): Observable<GhibliFilm[]> {
    //     return this.http.get<GhibliFilm[]>('https://ghibliapi.herokuapp.com/films/');
    // }

    getBoardGames(): Observable<BoardGamesViaAPI> {
        return this.http.get<BoardGamesViaAPI>('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=JLBr5npPhV&limit=100')
    }
}