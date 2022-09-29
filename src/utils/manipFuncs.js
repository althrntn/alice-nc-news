export const extractParams = (paramsArray) => {
  const params = {};

  paramsArray.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};
