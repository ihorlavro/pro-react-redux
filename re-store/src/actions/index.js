function booksRequested() {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
}

function booksLoaded(newBooks) {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
}

function booksError(error) {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
}

const fetchBooks = bookstoreService => () => dispatch => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => {
      dispatch(booksLoaded(data));
    })
    .catch(error => dispatch(booksError(error)));
};

function bookAddedToCart(bookId) {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
}

function bookRemovedFromCart(bookID) {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookID,
  };
}

function allBooksRemovedFromCart(bookID) {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookID,
  };
}

export { fetchBooks, bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart };
