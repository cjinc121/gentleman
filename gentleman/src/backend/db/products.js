import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Hotstar",
    photoUrl: "../../assets/1.png",
    originalPrice: "5000",
    discountPrice: "2000",
    categoryName: "Sports",
    featuredProduct: true,
  },
  {
    _id: uuid(),
    title: "Puma",
    photoUrl: "../../assets/featured-1.jpg",
    originalPrice: "5000",
    discountPrice: "2000",
    categoryName: "Sneakers",
    featuredProduct: true,
  },
  {
    _id: uuid(),
    title: "Addidas",
    photoUrl: "../../assets/featured-2.jpg",
    originalPrice: "5000",
    discountPrice: "2000",
    categoryName: "Sneakers",
    featuredProduct: true,
  },
  {
    _id: uuid(),
    title: "Nike",
    photoUrl: "../../assets/boots.jpg",
    originalPrice: "5000",
    discountPrice: "2000",
    categoryName: "Sneakers",
    featuredProduct: true,
  },
];
