import React from 'react';
import Main from './pages/Main';
import { Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home';
import { useSelector, useDispatch } from 'react-redux';





function App() {
  
  return (
    <div >

      <Route path='/' component={Main} exact />
      <Route path='/home' component={Home} exact />
      <Route path='/cart' component={Cart} exact />




    </div>

  );
}

export default App;
