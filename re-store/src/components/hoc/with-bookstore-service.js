import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

function withBookstoreService() {
  return Wrapped => {
    return props => {
      return (
        <BookstoreServiceConsumer>
          {bookstoreService => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Wrapped {...props} bookstoreService={bookstoreService} />;
          }}
        </BookstoreServiceConsumer>
      );
    };
  };
}

export default withBookstoreService;
