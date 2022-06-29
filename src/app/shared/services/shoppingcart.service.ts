import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Game } from "../models/boardgameviaapi.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    shoppingCartBus$: Subject<Game>;

    constructor() {
        this.shoppingCartBus$ = new Subject<Game>();
    }
}