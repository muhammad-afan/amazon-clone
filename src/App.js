import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe("pk_test_51M6FYbIDSvimkLXUFqkMVmvmME0E7lNyRuJB91UbpeaSXFHFFKUiOTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuH4002YC26ATu");

function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Routes >
            <Route path='/orders' element={[<Header />, <Orders />]}/>
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={[<Header />, <Checkout />]} />
            <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements>  ]} />
            <Route path='/' element={[<Header />, <Home />]} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
