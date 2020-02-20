function updateCartItems(cartItems, item, index) {
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }

  if (index === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
}

function updateCartItem(book, item = {}, quantity) {
  const { id = book.id, count = 0, title = book.title, totalPrice = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    totalPrice: totalPrice + quantity * book.price,
  };
}

function updateOrder(state, bookId, quantity) {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
}

function updateShoppingCart(state, action) {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  const {
    shoppingCart: { cartItems },
  } = state;

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_BOOKS_REMOVED_FROM_CART': {
      const item = cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    }
    default:
      return state.shoppingCart;
  }
}

export default updateShoppingCart;
