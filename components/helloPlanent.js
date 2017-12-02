import React,{ Component } from "react";

export class HelloPlanet extends React.Component {
    render(){
        return <h1>{this.props.myObj[0].name} Heya {this.props.name}</h1>
    }
}