function roundToTwo(num) {
  return Number(Math.round(num + "e+2")  + "e-2");
}

function calcCartTotal (currentCart) {
  let cartTotal = currentCart.reduce((acc, cv) => {
    let extendedPrice = roundToTwo(cv.quantity * cv.price);
    return acc + extendedPrice;
  }, 0);
  return roundToTwo(cartTotal)
}

export default calcCartTotal;