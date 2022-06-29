export class BoardGame {
	constructor(
		public name: string,
		public year: number,
        public min_plauers: number,
		public max_players: number,
        public min_playtime: number,
        public max_playtime: number,
		public min_age: number,
		public image?: string
	){}
}
