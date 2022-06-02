import { removeAddressService } from "../../services/address&ordersApiCalls";

const removeAddressHandler = async (_id, token, userDispatch) => {
  console.log(_id, "from address handler");
  try {
    const response = await removeAddressService(_id, token);
    if (response.status === 200)
      userDispatch({ type: "REMOVE_ADDRESS", payload: response.data.address });
  } catch (error) {
    console.error(error);
  }
};
export { removeAddressHandler };
