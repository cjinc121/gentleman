import { updateAddressService } from "../../services/address&ordersApiCalls";

const updateAddressHandler = async (address, token, userDispatch) => {
  try {
    const response = await updateAddressService(address, token);
    if (response.status === 200) {
      userDispatch({ type: "UPDATE_ADDRESS", payload: response.data.address });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { updateAddressHandler };
