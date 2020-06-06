import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
            <Login/>
      </Route>
      <Route path="/login">
            <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="*">
      <NotFound/>
      </Route>
      </Switch>
      </Router>
  ) ;
}

export default App;
