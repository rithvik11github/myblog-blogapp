import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Create from "./pages/create";

import Home from "./pages/home";
import Post from "./pages/post";
import NoMatch from "./pages/no-match";
import Logo from './logo';
import Logo2 from './logo2';
import Header from './Header';
import Galary from './galary';
//import automatic from './automatic';

function App() {
  return (
    <Router>
    <div className="box">
    <Header/>
    </div>
    <div className="container">
    <Logo/>
    <Logo2/>
    <Galary/>
    </div>
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/create">
          <h2>Create Post</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/404" component={NoMatch} />
          <Route path="/:slug" component={Post} />
        </Switch>
      </main>
      <div className="box">
    <Header/>
    </div>
    </Router>
  );
}

export default App;
