import Header from "./header";

import {Component} from "react";
import React from "react";
import Body from "./body";
import Footer from "./footer";
interface IState{}
interface IProps{}
class Main extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Body/>
                <Footer/>

            </React.Fragment>
        
    )
};


}
export default Main;