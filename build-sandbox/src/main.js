// class App {
//   run = async (name = 'World') => {
//     console.log(`Hello, ${name}`);
//   }
// }

// const app = new App();
// app.run()
//   .then(() => console.log('then'))
//   .catch(() => console.log('catch'));

// console.log([1, 2, 3, [3, 5]].flat());

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello? world!</h1>
}

ReactDOM.render(<App />, document.getElementById('root'));
