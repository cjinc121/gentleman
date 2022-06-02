import { getOrdersService } from "../../services/address&ordersApiCalls";

const getOrdersHandler = async (token, userDispatch) => {
  try {
    const response = await getOrdersService(token);
    userDispatch({ type: "GET_ORDERS", payload: response.data.orders });
  } catch (error) {
    console.error(error.response.data.errors[0]);
  }
};

export { getOrdersHandler };
