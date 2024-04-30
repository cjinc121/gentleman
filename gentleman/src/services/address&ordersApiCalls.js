import axios from "axios";

export const addNewAddressService = async (address) => {
  const res = await axios.post(
    'http://localhost:3001/api/user/address',
    { address },
    { withCredentials: true }
  );
  return res;
};

export const getAddressService = () => {
  return axios.get('http://localhost:3001/api/user/address', { withCredentials: true });
};

export const removeAddressService = async (_id) => {
  console.log(_id, 'addres');

  try {
    const res = await axios.delete(`http://localhost:3001/api/user/address/${_id}`, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const updateAddressService = (address) => {
  try {
    const res = axios.put(
      `http://localhost:3001/api/user/address/${address._id}`,
      { address },
      { withCredentials: true }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addNewOrderService = (order) => {
  return axios.post(
    'http://localhost:3001/api/user/orders',
    { ...order },
    { withCredentials: true }
  );
};

export const getOrdersService = () => {
  return axios.get('http://localhost:3001/api/user/orders', { withCredentials: true });
};
