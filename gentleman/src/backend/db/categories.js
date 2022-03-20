import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "BOOTS",
    photoUrl: "../../assets/boots.jpg",
  },
  {
    _id: uuid(),
    categoryName: "SPORTS",
    photoUrl: "../../assets/sports.jpg",
  },
  {
    _id: uuid(),
    categoryName: "OFFICE",
    photoUrl: "../../assets/office.jpg",
  },
  {
    _id: uuid(),
    categoryName: "SNEAKER",
    photoUrl: "../../assets/sneaker.jpg",
  },
  {
    _id: uuid(),
    categoryName: "SANDAL",
    photoUrl: "../../assets/sandals.jpg",
  },
];
