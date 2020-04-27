import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Books from './pages/Books';
import Saved from './pages/Saved';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import React from 'react';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Books} />
                    <Route exact path="/search" component={Books} />
                    <Route exact path="/saved" component={Saved} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
