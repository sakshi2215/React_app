import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div class="card">
                <img class="card-img-top" src="https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?t=st=1709230832~exp=1709234432~hmac=d650e3ff0bb1bbc806e3b4ff7a53372af7a1111786de8c1d1b524e40c84ad7ad&w=900" alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;