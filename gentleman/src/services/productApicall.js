
//get Wishlist

import { Api } from "../utils/Api";

export const getAllWishlistService = async () => {
  try {
    const res = await Api.get(`${process.env.REACT_APP_API_URL}api/user/wishlist`, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
//add Wishlist

export const addToWishlistService = async (product) => {
  try {
    const res = await Api.post(
      `${process.env.REACT_APP_API_URL}api/user/wishlist`,
      {
        product: product,
      },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
//delete from wishlist
export const deleteFromWishlistService = async (_id) => {
  try {
    const res = await Api.delete(`${process.env.REACT_APP_API_URL}api/user/wishlist/${_id}`, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
//get cart
export const getAllCartService = async () => {
  try {
    const res = await Api.get(`${process.env.REACT_APP_API_URL}api/user/cart`, { withCredentials: true });
    return res;
  } catch (error) {
    console.log(error);
  }
};
//add to cart
export const addToCartService = async (product) => {
  try {
    const res = await Api.post(
      `${process.env.REACT_APP_API_URL}api/user/cart`,
      {
        product,
      },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
//delete from cart
export const deleteFromCartService = async (_id) => {
  try {
    const res = await Api.delete(`${process.env.REACT_APP_API_URL}api/user/cart/${_id}`, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
//increase quantity

export const increaseQuantityCartService = async (_id) => {
  try {
    const data = await Api.post(
      `${process.env.REACT_APP_API_URL}api/user/cart/${_id}`,
      {
        action: {
          type: 'increment',
        },
      },
      { withCredentials: true }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
//decrease quantity
export const decreaseQuantityCartService = async (_id) => {
  try {
    const res = await Api.post(
      `${process.env.REACT_APP_API_URL}api/user/cart/${_id}`,
      {
        action: {
          type: 'decrement',
        },
      },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
