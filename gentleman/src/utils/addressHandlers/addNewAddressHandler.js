import { addNewAddressService } from "../../services/address&ordersApiCalls";

const addNewAddressHandler = async (address, userDispatch) => {
  try {
    const response = await addNewAddressService(address);
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
