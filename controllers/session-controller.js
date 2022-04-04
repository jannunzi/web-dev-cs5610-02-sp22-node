
const addToCart = (req, res) => {
  let cart = req.session['cart'];
  if(!cart) {
    cart = [];
  }
  const prod = req.params['product'];
  cart.push(prod);
  req.session['cart'] = cart;
  res.sendStatus(200);
}

const getCart = (req, res) => {
  const cart = req.session['cart'];
  res.json(cart);
}

const clearCart = (req, res) => {
  req.session['cart'] = [];
  res.sendStatus(200);
}

module.exports = (app) => {
  app.get('/api/cart/add/:product', addToCart);
  app.get('/api/cart/get', getCart);
  app.get('/api/cart/clear', clearCart);
}