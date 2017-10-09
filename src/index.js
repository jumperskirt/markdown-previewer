import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import showdown from 'showdown';
import Header from './components/header';
import MarkdownPreviewer from './components/MarkdownPreviewer';

const App = () => {

return (
    <div className="container-fluid">
      <Header />
      <MarkdownPreviewer />
    </div>
);

};

ReactDOM.render(<App />, document.getElementById('app'));
