import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDgW7oLrcQ8hqrStI-gtC_s35NAWkLzuM0';

//Create a new component. This component should produce some HTML
const App = () => {
  return <SearchBar />;
}

//Take this component's generated HTMl and put it on the page (in the DOM)
ReactDOM.render(
  <App/>, document.querySelector('.container'));
