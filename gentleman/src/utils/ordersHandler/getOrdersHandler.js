import { getOrdersService } from "../../services/address&ordersApiCalls";

const getOrdersHandler = async (userDispatch) => {
  try {
    const response = await getOrdersService();
    userDispatch({ type: 'GET_ORDERS', payload: response.data.orders });
  } catch (error) {
    console.error(error.response.data.errors[0]);
  }
};

export { getOrdersHandler };
