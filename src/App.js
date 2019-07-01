import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';

function AppRouter(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/users">users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/Users" exact component={Users}></Route>
      </div>
    </Router>
  )
}

export default AppRouter;
