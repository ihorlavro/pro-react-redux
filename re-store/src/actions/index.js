function booksLoaded(newBooks) {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
}

function booksRequested() {
  return {
    type: 'BOOKS_REQUESTED',
  };
}

function booksError(error) {
  return {
    type: 'BOOKS_ERROR',
    payload: error,
  };
}

export { booksLoaded, booksRequested, booksError };
