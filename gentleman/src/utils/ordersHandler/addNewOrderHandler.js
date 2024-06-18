import { addNewOrderService } from "../../services/address&ordersApiCalls";

const addNewOrderHandler = async (order, userDispatch) => {
  try {
    const response = await addNewOrderService(order);
    if (response.status === 201) {
      userDispatch({ type: 'ADD_NEW_ORDER', payload: response.data.orders });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error.response.data.errors[0]);
  }
};

export { addNewOrderHandler };
