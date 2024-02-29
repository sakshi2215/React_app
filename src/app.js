import React,{Component} from "react";
import Navbar from "./navbar";
import Card from "./card";
//Functional and class compnents

//React Component
class App extends Component{
    //app ki properties kya hai
    state ={};
    //ye componnt dikhayi kya dega
    render(){
    //    return(<h1 className="blue-text">Hello World</h1>);
    return(
        <div>
         <Navbar/>
         <Card/>
         <Card/>
        </div>
    
    );
    }
}

export default App;