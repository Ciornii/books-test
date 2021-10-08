const getLimitedSymbol = item => {
  if (item.length > 150) {
    return `${item.substring(0, 150)}...`;
  }

  return item;
};

export default getLimitedSymbol;
