export const getAllPriceRange = (productData) => {
  const sortedArray = productData.data.products.sort(
    (a, b) => a.price - b.price
  );
  const minValue = sortedArray[0];
  const maxValue = sortedArray[sortedArray.length - 1];
  //   now filter the product
  const filterValue = productData.data.products.filter(
    (p) => p.price >= p.price >= minValue.price && p.price <= maxValue.price
  );
  return filterValue;
};

// price range filter

export const gotMinimumMax = (productData) => {
  const sortedArray = productData.data.products.sort(
    (a, b) => a.price - b.price
  );
  const minValue = sortedArray[0].price;
  const maxValue = sortedArray[sortedArray.length - 1].price;
  return [Math.round(minValue), Math.round(maxValue)];
};
export const sortProduct = (filterData, order = 1) => {
  if (order == 1) {
    return filterData.sort((a, b) => a.price - b.price);
  } else {
    return filterData.sort((a, b) => a.price + b.price);
  }
};

// get all tagList
export const getAllTagList = (product) => {
  const filteItem = [];
  product.data.products.filter((item) => {
    filteItem.push(item.tags);
  });
  //   flat the whoel
  const allTag = filteItem.flatMap((item) => {
    return item;
  });

  const fullTags = [...new Set(allTag)].map((item, index) => {
    return {
      id: index + 1,
      name: item,
      checked: false,
    };
  });
  return fullTags;
};
