export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
export const addItemToCart = (item) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: item,
  };
};
