import axios from "axios";

export const addNewAddressService = async (address, token) => {
  const res = await axios.post(
    "/api/user/address",
    { address },
    { headers: { authorization: token } }
  );
  return res;
};

export const getAddressService = (token) => {
  return axios.get("/api/user/address", { headers: { authorization: token } });
};

export const removeAddressService = async (_id, token) => {
  console.log(_id, "addres");

  try {
    const res = await axios.delete(`/api/user/address/${_id}`, {
      headers: { authorization: token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const updateAddressService = (address, token) => {
  try {
    const res = axios.post(
      `/api/user/address/${address._id}`,
      { address },
      { headers: { authorization: token } }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addNewOrderService = (order, token) => {
  return axios.post(
    "/api/user/orders",
    { ...order },
    { headers: { authorization: token } }
  );
};

export const getOrdersService = (token) => {
  return axios.get("/api/user/orders", { headers: { authorization: token } });
};
