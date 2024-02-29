import Jumbotron from "./jumbotron.js";
import Navbar from "./navbar.js";
import React,{Component} from "react";
class App extends Component{
     render(){
        return(
            <div>
                <Navbar/>
                <Jumbotron/>
            </div>
            
        );
     }
}
export default App;