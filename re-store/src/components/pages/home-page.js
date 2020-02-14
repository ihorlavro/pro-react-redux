import React from 'react';

import BookList from '../book-list';

function HomePage() {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 3',
    },
  ];

  return <BookList books={books} />;
}

export default HomePage;
