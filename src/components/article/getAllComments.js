import RESTAPI from '../../REST API';

const getAllProducts = async () => {
  const response = await fetch(RESTAPI.name);
  const result = await response.json();

  console.log(result);
  return result;
};

export default getAllProducts;
