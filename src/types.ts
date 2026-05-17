export interface Game {
  id: string;
  name: string;
  image: string;
  categories: GameCategory[];
}

export enum GameCategory {
  CURRENCY = "Currency",
  ACCOUNTS = "Accounts",
  ITEMS = "Items",
  BOOSTING = "Boosting",
}

export interface Offer {
  id: string;
  gameId: string;
  category: GameCategory;
  title: string;
  price: number;
  currency: string;
  sellerName: string;
  sellerRating: number;
  deliveryTime: string;
  inStock: boolean;
}
