import { Game } from "./boardgameviaapi.model";

export class BoardGameOrder {
    constructor(
        public boardgame: Game,
        public numOrder: number = 1
    ) {}
}