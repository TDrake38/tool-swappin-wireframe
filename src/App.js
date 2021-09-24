import React from 'react';
import Login from "./components/LoginForm";
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from "react-router-dom"
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/messages" exact component={Messages}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/" exact component={Home}/>
          <Route render={() => <div> 404 </div>} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

//<Route path="/" render={() => <div> 404 </div>} />

export default App;
