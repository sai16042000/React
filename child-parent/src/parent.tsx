import { render } from "@testing-library/react";
import React, {Component} from "react";
import Child from "./child";
interface Istate{
    key:string;
}
interface Iprops{}
class Parent extends Component<Iprops,Istate>{
constructor(props:Iprops){
    super(props);
    this.state={
      key:"react"
    }
}
myfun=((data:any):void=>{
    this.setState({
        key:data

    })
})

render(){
    return(
<React.Fragment>
<h1>{this.state.key}</h1>
<Child key1={this.myfun}></Child>
</React.Fragment>
    )
}
}
export default Parent;
