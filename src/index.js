import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './style.css';


/*   DAY-01
 HAI NOOB KI TEchniQUE
 React library is used to create the element
 let element = React.createElement('div',
 null,
 React.createElement('h1',null,'Hello World')
 );
 React Dom is used to render the created elemnt at spectfied position
 ReactDOM.render(element,document.querySelector('#root'));


JSX-- YE HAI REACT KI TECHNIQUE  --WHY????
 it gets transformed into JavaScript function calls by a process called JSX transformation.
 This process is typically handled by a tool like Babel.
 converts the JSX into React.createElement() calls. 
 s a function provided by React that creates a virtual DOM element. It takes at least three arguments:
 the type of element to create (such as a string for HTML elements or a component function),
 props (which can be null if there are no props), and children (which can also be null if there are no children).

 React then uses these virtual DOM elements to efficiently update the actual DOM as needed,
 minimizing the number of direct manipulations of the real DOM for better performance.
let element = <div><h1><spam>Hello World</spam></h1></div>;
Kon sa elemnt render krna hai
kha pr render krna hai.

ReactDOM.render(element, document.querySelector('#root'));
*/

//Day-02
ReactDOM.render(<App/>, document.querySelector('#root'));
