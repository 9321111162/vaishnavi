import React from 'react';
import ReactDOM from 'react-dom';
import JSXDemo from './jsx demos/JSXDemo';
import ClassBasedComp from './simple components demos/ClassBasedComp';
import FunctionalComp from './simple components demos/FunctionalComp';

// Parent Component
function App(){

    // JSX
    return (
        <div>
            <h1>Hello World !!</h1>
            <h2>Hello React App</h2>
            <FunctionalComp/>
            <ClassBasedComp/>
            <JSXDemo/>
        </div>
    );
}

ReactDOM.render(
    <App/> , document.querySelector("#root")
);