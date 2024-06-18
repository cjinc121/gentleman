import { updateAddressService } from "../../services/address&ordersApiCalls";

const updateAddressHandler = async (address, userDispatch) => {
  try {
    const response = await updateAddressService(address);
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
