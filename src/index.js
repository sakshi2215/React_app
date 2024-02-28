import React from 'react';
import ReactDOM from 'react-dom';
//React library is used to create the element
let element = React.createElement('h1',null,'Hello World');
//React Dom is used to render the created elemnt at spectfied position
ReactDOM.render(element,document.querySelector('#root'));
