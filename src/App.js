import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

const App = () => (
    <div>
        <Header />
    </div>
);

const Header = () => (
    <header>
        <h1>My Contacts</h1>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
        </nav>

        <Route exact path="/" component={Welcome} />
        <Route path="/contacts" component={Contacts} />
    </header>
);

const Welcome = ({ match }) => <h1>Welcome to the contact app!!</h1>;

const Contacts = ({ match }) => (
    <div>
        <ul>
            <li>
                <Link to="/contacts/Rock">Rock</Link>
            </li>
            <li>
                <Link to="/contacts/Lynn">Lynn</Link>
            </li>
            <li>
                <Link to="/contacts/Nicolas">Nicolas</Link>
            </li>
        </ul>
        <Route exact path={`${match.path}`} render={() => <h3>Please select a contacts</h3>} />
        <Route path={`${match.path}/:contactName`} component={Contact} />
    </div>
);

const Contact = ({ match }) => `Your Friends name is ${match.params.contactName}`;

export default App;
