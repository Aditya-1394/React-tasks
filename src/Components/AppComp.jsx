import React, { Component } from "react";

class AppComp extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)

        return(
            <h5>Class Component</h5>
            <h3>Name : {this.props.names}</h3>
        );
    }
    
}
export default AppComp;