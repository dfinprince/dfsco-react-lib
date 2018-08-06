import React from 'react';
import ReactDOM from 'react-dom';
import { TextInput } from './lib';

const App = () => {
    // eslint-disable-next-line
    return (<div style={{ width: 640, margin: "15px auto" }}>
        <h1>Hello React</h1>
        <TextInput label="Email Address" placeholder="name@example.com" />
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));
