import React, { Component } from 'react';

import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Header />
    </div>
);

const Header = () => (
    <header>
        <h1>My Contacts</h1>
        <Route exact path="/" component={Welcome} />
        <Route path="/contacts" component={Contacts} />
    </header>
);

const Welcome = () => <h1>Welcome to the contact app!!</h1>;

const Contacts = () => (
    <ul>
        <li>Rock</li>
        <li>Lynn</li>
        <li>Nicolas</li>
    </ul>
);

export default App;
