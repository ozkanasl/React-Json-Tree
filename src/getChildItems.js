export default (array, id) => {
  const newList = array && array.filter(item =>
    item.parentID === id
  );
  return newList;
};
