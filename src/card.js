import { render } from "@testing-library/react";
import React,{Component} from "react";
class Card extends Component{
    state={};
    render(){
        return(
            <div>
                <img  alt="error" src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"></img>
                <h1>
                    Card#1
                </h1>
            </div>     
        );
    }
}
export default Card;