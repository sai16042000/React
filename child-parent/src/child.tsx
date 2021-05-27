import React from "react";

import {Component} from "react";
interface IState{}
interface Iprops{
    key1:(data:any)=>void;
};
class Child extends Component<Iprops,IState>{
    constructor(props:Iprops){
        super(props);
        
        
    }
    render(){
        return(
            <React.Fragment>
            <button onClick={()=>{this.props.key1("reactjs with typescript")}}>change</button>
            </React.Fragment>
        )
    }
}
export default Child;