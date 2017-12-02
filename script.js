import React from 'react';
import ReactDOM from 'react-dom';

function HelloPlanet(props){
    console.log(props);
    return <h1>Hello {props.name}</h1>;
}

ReactDOM.render(
    <div>
    <HelloPlanet haswifi="true" name="Earth"/>,
    <h1>Second</h1>,
    </div>,
    document.getElementById('firstApp')
);