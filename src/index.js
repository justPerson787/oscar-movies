import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';

const App = () => {
    return (
        <div>
            <h2>Oscar Movies!</h2>
            <List />
        </div>
        
    )};

ReactDOM.render(<App />, document.getElementById('root'));