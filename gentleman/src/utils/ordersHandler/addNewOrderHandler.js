import { addNewOrderService } from "../../services/address&ordersApiCalls";

const addNewOrderHandler = async (order, userDispatch, token) => {
  try {
    const response = await addNewOrderService(order, token);
    if (response.status === 201) {
      userDispatch({ type: "ADD_NEW_ORDER", payload: response.data.orders });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error.response.data.errors[0]);
  }
};

export { addNewOrderHandler };
