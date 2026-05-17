import { Game, GameCategory } from "./types";

export const GAMES: Game[] = [
  {
    id: "wow",
    name: "World of Warcraft",
    image: "https://picsum.photos/seed/wow/400/600",
    categories: [GameCategory.CURRENCY, GameCategory.ACCOUNTS, GameCategory.ITEMS, GameCategory.BOOSTING],
  },
  {
    id: "cs2",
    name: "Counter-Strike 2",
    image: "https://picsum.photos/seed/cs2/400/600",
    categories: [GameCategory.ITEMS, GameCategory.BOOSTING],
  },
  {
    id: "osrs",
    name: "Old School RuneScape",
    image: "https://picsum.photos/seed/osrs/400/600",
    categories: [GameCategory.CURRENCY, GameCategory.ACCOUNTS, GameCategory.ITEMS],
  },
  {
    id: "gta5",
    name: "GTA 5",
    image: "https://picsum.photos/seed/gta5/400/600",
    categories: [GameCategory.CURRENCY, GameCategory.ACCOUNTS],
  },
  {
    id: "fortnite",
    name: "Fortnite",
    image: "https://picsum.photos/seed/fortnite/400/600",
    categories: [GameCategory.ACCOUNTS, GameCategory.ITEMS],
  },
  {
    id: "valorant",
    name: "Valorant",
    image: "https://picsum.photos/seed/valorant/400/600",
    categories: [GameCategory.ACCOUNTS, GameCategory.BOOSTING],
  },
  {
    id: "lol",
    name: "League of Legends",
    image: "https://picsum.photos/seed/lol/400/600",
    categories: [GameCategory.ACCOUNTS, GameCategory.BOOSTING],
  },
  {
    id: "diablo4",
    name: "Diablo 4",
    image: "https://picsum.photos/seed/diablo4/400/600",
    categories: [GameCategory.CURRENCY, GameCategory.ITEMS, GameCategory.BOOSTING],
  },
];
