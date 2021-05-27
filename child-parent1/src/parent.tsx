import React from "react";
import{Component} from "react";
import Child from "./child";
interface IState{
    "sub1":string;
    "sub2":number;
    "sub3":string;
}
interface IProps{}
class Parent extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            "sub1":"angular",
            "sub2":100,
            "sub3":"fullstack"
        }
    }
    myFun=((arg1:any)=>{
      this.setState({
          sub1:arg1.key1,
          sub2:arg1.key2,
          sub3:arg1.key3
      })
    })
    render(){
        return(
            <React.Fragment>
            <h1>{this.state.sub1}....{this.state.sub2}........{this.state.sub3}</h1>
            <Child key1={this.myFun}></Child>
            </React.Fragment>
        )
    }
}
export default Parent;