import { Api } from "../utils/Api";

export const addNewAddressService = async (address) => {
  const res = await Api.post(
    `${process.env.REACT_APP_API_URL}api/user/address`,
    { address },
    { withCredentials: true }
  );
  return res;
};

export const getAddressService = () => {
  return Api.get(`${process.env.REACT_APP_API_URL}api/user/address`, { withCredentials: true });
};

export const removeAddressService = async (_id) => {
  console.log(_id, 'addres');

  try {
    const res = await Api.delete(`${process.env.REACT_APP_API_URL}api/user/address/${_id}`, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const updateAddressService = (address) => {
  try {
    const res = Api.put(
      `${process.env.REACT_APP_API_URL}api/user/address/${address._id}`,
      { address },
      { withCredentials: true }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addNewOrderService = (order) => {
  return Api.post(
    `${process.env.REACT_APP_API_URL}api/user/orders`,
    { ...order },
    { withCredentials: true }
  );
};

export const getOrdersService = () => {
  return Api.get(`${process.env.REACT_APP_API_URL}api/user/orders`, { withCredentials: true });
};
