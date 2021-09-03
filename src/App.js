import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import "./App.css"

 function App() {
    return (
        <Router>
           <div className="app">
              <Switch>
                  <Route path="/successstories">
                    <h1>successStories</h1>
                  </Route>
                  <Route path="/gallary">
                    <h1>Gallary</h1>
                  </Route>
                  <Route path="/events">
                    <h1>Events</h1>
                  </Route>
                  <Route path="/blog">
                    <h1>Blog</h1>
                  </Route>
                  <Route path="/">
                      <Header />
                    <h1>Home page</h1>
                  </Route>
              </Switch>
            
        </div>
        </Router>
        
    )
}
export default App;
