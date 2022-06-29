export interface Msrp {
    country: string;
    price: number;
}

export interface Mechanic {
    id: string;
    url: string;
}

export interface Category {
    id: string;
    url: string;
}

export interface Game2 {
}

export interface Images {
    thumb?: any;
    small?: any;
    medium?: any;
    large?: any;
    original?: any;
}

export interface Publisher {
    id: string;
    num_games?: any;
    score: number;
    game: Game2;
    url: string;
    images: Images;
}

export interface Game3 {
}

export interface Images2 {
    thumb?: any;
    small?: any;
    medium?: any;
    large?: any;
    original?: any;
}

export interface Designer {
    id: string;
    num_games?: any;
    score: number;
    game: Game3;
    url: string;
    images: Images2;
}

export interface PrimaryPublisher {
    id: string;
    name: string;
    url: string;
}

export interface PrimaryDesigner {
    id: string;
    name: string;
    url: string;
}

export interface PfGame {
    objectId: string;
}

export interface Images3 {
    thumb: string;
    small: string;
    medium: string;
    large: string;
    original: string;
}

export interface RelatedTo {
    id: string;
    pfGame: PfGame;
    url: string;
    edit_url: string;
    price: string;
    price_ca: string;
    price_uk: string;
    price_au: string;
    msrp: string;
    discount: string;
    year_published?: any;
    min_players?: any;
    max_players?: any;
    min_playtime?: any;
    max_playtime?: any;
    min_age?: any;
    description: string;
    commentary: string;
    faq: string;
    thumb_url: string;
    image_url: string;
    matches_specs?: any;
    specs: any[];
    mechanics: any[];
    categories: any[];
    publishers: any[];
    designers: any[];
    developers: any[];
    related_to: any[];
    related_as: any[];
    artists: any[];
    names: any[];
    comment_count: number;
    num_user_ratings: number;
    average_user_rating: number;
    bgg_id?: any;
    num_user_complexity_votes: number;
    average_learning_complexity: number;
    average_strategy_complexity: number;
    visits: number;
    lists: number;
    mentions: number;
    links: number;
    plays: number;
    rank: number;
    num_distributors: number;
    trending_rank: number;
    listing_clicks: number;
    is_historical_low: boolean;
    price_text: string;
    tags: any[];
    images: Images3;
    description_preview: string;
}

export interface HistoricalLowPrice {
    country: string;
    date: Date;
    price: number;
    isLow: boolean;
}

export interface SkuObject {
    name: string;
    sku: string;
}

export interface Images4 {
    thumb: string;
    small: string;
    medium: string;
    large: string;
    original: string;
}

export interface Game {
    id: string;
    handle: string;
    url: string;
    edit_url: string;
    name: string;
    price: string;
    price_ca: string;
    price_uk: string;
    price_au: string;
    msrp: any;
    msrps: Msrp[];
    discount: string;
    year_published?: number;
    min_players?: number;
    max_players?: number;
    min_playtime?: number;
    max_playtime?: number;
    min_age?: number;
    description: string;
    commentary: string;
    faq: string;
    thumb_url: string;
    image_url: string;
    matches_specs?: any;
    specs: any[];
    mechanics: Mechanic[];
    categories: Category[];
    publishers: Publisher[];
    designers: Designer[];
    primary_publisher: PrimaryPublisher;
    primary_designer: PrimaryDesigner;
    developers: any[];
    related_to: RelatedTo[];
    related_as: string[];
    artists: string[];
    names: any[];
    rules_url: string;
    amazon_rank: number;
    cs_rating: number;
    official_url: string;
    sell_sheet_url?: any;
    store_images_url?: any;
    comment_count: number;
    num_user_ratings: number;
    average_user_rating: number;
    size_height: number;
    historical_low_prices: HistoricalLowPrice[];
    active: boolean;
    num_user_complexity_votes: number;
    average_learning_complexity: number;
    average_strategy_complexity: number;
    visits: number;
    lists: number;
    mentions: number;
    links: number;
    plays: number;
    rank: number;
    type: string;
    sku: string;
    upc: string;
    num_distributors: number;
    trending_rank: number;
    listing_clicks: number;
    is_historical_low: boolean;
    skus: string[];
    sku_objects: SkuObject[];
    players: string;
    playtime: string;
    msrp_text: string;
    price_text: string;
    tags: string[];
    images: Images4;
    description_preview: string;
    comment: string;
    rating: number;
    showrating: boolean;
}

export interface BoardGamesViaAPI {
    games: Game[];
    count: number;
}
