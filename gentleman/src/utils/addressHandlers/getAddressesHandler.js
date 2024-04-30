import { getAddressService } from "../../services/address&ordersApiCalls";

const getAddressesHandler = async ( userDispatch) => {
  try {
    const response = await getAddressService();
    userDispatch({ type: "GET_ADDRESS", payload: response.data.address });
  } catch (error) {
    console.error(error.response.data.errors[0]);
  }
};

export { getAddressesHandler };
