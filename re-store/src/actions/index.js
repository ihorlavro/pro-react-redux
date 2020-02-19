import { func } from 'prop-types';

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

function fetchBooks(bookstoreService, dispatch) {
  return () => {
    dispatch(booksRequested());
    bookstoreService
      .getBooks()
      .then(data => {
        dispatch(booksLoaded(data));
      })
      .catch(error => dispatch(booksError(error)));
  };
}

function bookAddedToCard(bookId) {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
}

export { fetchBooks, bookAddedToCard };
