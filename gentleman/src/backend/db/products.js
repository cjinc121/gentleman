import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: " White Lace Up Trendy",
    description: "Outdoor Fashion Sneakers",
    photoUrl: "../../assets/s-1.jpg",
    originalPrice: "3000",
    discountPrice: 1299,
    categoryName: "SNEAKER",
    featuredProduct: true,
    inStock: true,
    fastDelivery: true,
    rating: 4,
  },
  {
    _id: uuid(),
    title: " Olive Green Lace Up Trendy",
    description: "Stylish Outdoor Fashion Sneakers",
    photoUrl: "../../assets/s-2.jpg",
    originalPrice: "2500",
    discountPrice: 2000,
    categoryName: "SNEAKER",
    featuredProduct: false,
    inStock: true,
    fastDelivery: true,
    rating: 4,
  },
  {
    _id: uuid(),
    title: " Army Trending Lace Up",
    description: "Camouflage Sneakers",
    photoUrl: "../../assets/s-3.jpg",
    originalPrice: "4000",
    discountPrice: 2999,
    categoryName: "SNEAKER",
    featuredProduct: false,
    inStock: true,
    fastDelivery: false,

    rating: 2,
  },
  {
    _id: uuid(),
    title: " Black Suede Leather Slip On",
    description: "Chelsea Boots",
    photoUrl: "../../assets/b-1.jpg",
    originalPrice: "10000",
    discountPrice: 1699,
    categoryName: "BOOTS",
    featuredProduct: false,
    inStock: false,
    fastDelivery: false,
    rating: 2,
  },
  {
    _id: uuid(),
    title: " Men's Tan Leather Lace Up High",
    description: " Boots",
    photoUrl: "../../assets/b-3.jpg",
    originalPrice: "7000",
    discountPrice: 4699,
    categoryName: "BOOTS",
    featuredProduct: true,
    inStock: false,
    fastDelivery: false,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Tan Suede Leather Slip On",
    description: "Chelsea Boots",
    photoUrl: "../../assets/b-2.jpg",
    originalPrice: "10000",
    discountPrice: 1699,
    categoryName: "BOOTS",
    featuredProduct: false,
    inStock: true,
    fastDelivery: false,
    rating: 4,
  },
  // sandals
  {
    _id: uuid(),
    title: "Camel Formal Slip On",
    description: "Sandal",
    photoUrl: "../../assets/sandal-3.jpg",
    originalPrice: "560",
    discountPrice: 499,
    categoryName: "SANDAL",
    featuredProduct: false,
    inStock: true,
    fastDelivery: false,
    rating: 1,
  },
  {
    _id: uuid(),
    title: "Navy Blue Outdoor",
    description: "Sandal",
    photoUrl: "../../assets/sandal-2.jpg",
    originalPrice: "560",
    discountPrice: 499,
    categoryName: "SANDAL",
    featuredProduct: true,
    inStock: false,
    fastDelivery: false,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Black Buckle Criss Cross",
    description: "Sandal",
    photoUrl: "../../assets/sandal-1.jpg",
    originalPrice: "760",
    discountPrice: 499,
    categoryName: "SANDAL",
    featuredProduct: true,
    inStock: false,
    fastDelivery: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Black Formal Lace Up Shoes",
    description: "Formals",
    photoUrl: "../../assets/o-1.jpg",
    originalPrice: "760",
    discountPrice: 499,
    categoryName: "OFFICE",
    featuredProduct: false,
    inStock: false,
    fastDelivery: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Black Lace Up Leather",
    description: "Formals",
    photoUrl: "../../assets/o-2.jpg",
    originalPrice: "7600",
    discountPrice: 1499,
    categoryName: "OFFICE",
    featuredProduct: false,
    inStock: false,
    fastDelivery: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Brown Formal Lace Up Shoes",
    description: "Formals",
    photoUrl: "../../assets/o-3.jpg",
    originalPrice: "1760",
    discountPrice: 999,
    categoryName: "OFFICE",
    featuredProduct: false,
    inStock: false,
    fastDelivery: false,
    rating: 2,
  },
  // sports
  {
    _id: uuid(),
    title: "Black Sports & Outdoor ",
    description: "Running Shoes",
    photoUrl: "../../assets/sports-2.jpg",
    originalPrice: "2760",
    discountPrice: 1999,
    categoryName: "SPORTS",
    featuredProduct: false,
    inStock: false,
    fastDelivery: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Green Sports & Outdoor ",
    description: "Running Shoes",
    photoUrl: "../../assets/sports-1.jpg",
    originalPrice: "2760",
    discountPrice: 1999,
    categoryName: "SPORTS",
    featuredProduct: true,
    inStock: false,
    fastDelivery: false,
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Multi Sports & Outdoor ",
    description: "Running Shoes",
    photoUrl: "../../assets/sports-3.jpg",
    originalPrice: "2760",
    discountPrice: 1999,
    categoryName: "SPORTS",
    featuredProduct: true,
    inStock: false,
    fastDelivery: false,
    rating: 2,
  },
];
