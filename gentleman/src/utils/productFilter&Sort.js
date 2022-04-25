const filterDataByRange = ({ range, product }) => {
  const returnData = product.filter((item) => item.discountPrice <= range);
  return returnData;
};
const filterDataByCategory = ({ category }, productList) => {
  if (category.length >= 1) {
    const returnData = productList.filter(
      (item) => category.indexOf(item.categoryName) !== -1
    );
    return returnData;
  }
  return productList;
};
const filterDataByinstock = ({ instock }, productList) => {
  if (instock) return productList.filter((item) => item.inStock === instock);
  return productList;
};

const filterDataByfastdelivery = ({ fastdelivery }, productList) => {
  if (fastdelivery)
    return productList.filter((item) => item.fastDelivery === fastdelivery);
  return productList;
};
const sortDataByPrice = ({ sort }, productList) => {
  if (sort === null) return productList;
  if (sort === "HIGH")
    return [...productList].sort(
      (a, b) => parseFloat(b.discountPrice) - parseFloat(a.discountPrice)
    );
  else if (sort === "LOW")
    return [...productList].sort(
      (a, b) => parseFloat(a.discountPrice) - parseFloat(b.discountPrice)
    );
};
const filterDataByRating = ({ rating }, productList) => {
  if (rating === null) return productList;
  return productList.filter((item) => item.rating >= rating);
};
const compose = (state, ...args) => {
  const output = args.reduce((acc, curr) => {
    acc = curr(state, acc);
    return acc;
  }, state);

  return output;
};
export {
  filterDataByRating,
  filterDataByfastdelivery,
  filterDataByinstock,
  filterDataByCategory,
  filterDataByRange,
  sortDataByPrice,
  compose,
};
