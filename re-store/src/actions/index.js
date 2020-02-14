function booksLoaded(newBooks) {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
}

// eslint-disable-next-line import/prefer-default-export
export { booksLoaded };
