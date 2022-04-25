import axios from "axios";

//get Wishlist

export const getAllWishlistService = async (userState) => {
  try {
    const res = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: userState.tokenVal,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
//add Wishlist

export const addToWishlistService = async (product, userState) => {
  try {
    const res = await axios.post(
      "/api/user/wishlist",
      {
        product: product,
      },
      {
        headers: {
          authorization: userState.tokenVal,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
//delete from wishlist
export const deleteFromWishlistService = async (_id, userState) => {
  try {
    const res = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: {
        authorization: userState.tokenVal,
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
//get cart
export const getAllCartService = async (userState) => {
  try {
    const res = await axios.get("/api/user/cart", {
      headers: {
        authorization: userState.tokenVal,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
//add to cart
export const addToCartService = async (product, userState) => {
  try {
    const res = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: userState.tokenVal,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
//delete from cart
export const deleteFromCartService = async (_id, userState) => {
  try {
    const res = await axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: userState.tokenVal,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
//increase quantity

export const increaseQuantityCartService = async (_id, userState) => {
  try {
    const data = await axios.post(
      `/api/user/cart/${_id}`,
      {
        action: {
          type: "increment",
        },
      },
      { headers: { authorization: userState.tokenVal } }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
//decrease quantity
export const decreaseQuantityCartService = async (_id, userState) => {
  try {
    const res = await axios.post(
      `/api/user/cart/${_id}`,
      {
        action: {
          type: "decrement",
        },
      },
      { headers: { authorization: userState.tokenVal } }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
