import Jumbotron from "./jumbotron.js";
import Navbar from "./navbar.js";
import React,{Component} from "react";
import Card from "./card.js";
class App extends Component{
     render(){
        return(
            <div>
                <Navbar/>
                <Jumbotron/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"><Card title="Product#1" /></div>
                        <div className="col-md-3"><Card title="Product#2" /></div>
                        <div className="col-md-3"><Card title="Product#3" /></div>
                        <div className="col-md-3"><Card title="Product#4" /></div>
                    </div>
                </div>
                
            </div>
            
        );
     }
}
export default App;