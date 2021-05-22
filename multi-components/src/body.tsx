
   
import React from "react";
import {Component} from "react";
interface IState{}
interface IProps{}
class Body extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
          <h2>mens</h2>
          <h2>womens</h2>
          <h2>kids</h2>
          </React.Fragment>
          
        
    )
};


}




export default Body;