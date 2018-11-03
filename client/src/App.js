import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// Redux Store
import store from './store';

// Layout
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';

// Auth
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// Global Styling
import './App.css';

// Check for Token
const token = localStorage.jwtToken;
if ( token ) {
  // Set auth token header auth
  setAuthToken(token);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if ( decoded.exp < currentTime ) {
    // Log user out
    store.dispatch(logoutUser());
    // TODO: Clear current profile

    // Redirect to login
    window.location.href = '/login';
  }
} 

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path='/' component={ Landing } />
            <div className='container'>
              <Route exact path='/register' component={ Register } />
              <Route exact path='/login' component={ Login } />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
