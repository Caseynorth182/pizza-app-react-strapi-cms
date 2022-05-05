import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components'
import { Cart, Error404, Home } from './pages/'
import axios from 'axios';




function App() {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    /*  fetch('http://localhost:3000/db.json')
       .then(res => res.json())
       .then(json => {
         setPizzas(json.pizzas)
       }) */
    axios.get('http://localhost:3000/db.json').then(resp => {
      setPizzas(resp.data.pizzas)
    })


  }, [])

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route index path='/' element={<Home pizzas={pizzas} />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
