export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Book 1',
        author: 'Author 1',
        price: 30,
        cover: 'https://balka-book.com/files/2020/01_17/13_21/u_files_store_3_2350201.jpg',
      },
      {
        id: 2,
        title: 'Book 2',
        author: 'Author 3',
        price: 33,
        cover: 'https://balka-book.com/files/2020/01_17/13_21/u_files_store_3_2350201.jpg',
      },
    ];
  }
}
