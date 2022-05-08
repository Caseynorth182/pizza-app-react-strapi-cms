import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './scss/app.scss'
import { Provider } from 'react-redux'
import store from './redux/store';


const inc = () => {
  store.dispatch({
    type: 'counter/incremented'
  })
}


/* console.log(store); */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <button onClick={inc} style={{ width: 100, height: 100 }}>+1</button>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


