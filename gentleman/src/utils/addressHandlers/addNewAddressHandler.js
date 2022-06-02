import { addNewAddressService } from "../../services/address&ordersApiCalls";

const addNewAddressHandler = async (address, userDispatch, token) => {
  try {
    const response = await addNewAddressService(address, token);
    console.log(response);
    if (response.status === 201) {
      userDispatch({ type: "ADD_NEW_ADDRESS", payload: response.data.address });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { addNewAddressHandler };
