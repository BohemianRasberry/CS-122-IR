import React, { Component } from "react";
import { render } from "react-dom";

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(<h1>Testing React Code</h1>)
    }
}

const mainDiv = document.getElementById("main");
render(<Main />, mainDiv);