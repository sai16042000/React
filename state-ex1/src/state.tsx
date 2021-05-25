import { render } from "@testing-library/react";
import React, {Component} from "react";
interface Istate{
    "username":string,
    "password":any,
    "email":string
}
interface Iprops{}
class State extends Component<Iprops,Istate>{
constructor(props:Iprops){
    super(props);
    this.state={
      username:"praveena",
      password:"pravee@12",
      email:"praveena@gmail.com"
    }
}
myfun=()=>{
    this.setState({
        username:"Ashokit",
        password:"1234",
        email:"hr@ashokit.in"

    })
}

render(){
    return(
<React.Fragment>
<h1>{this.state.username}</h1>
<h1>{this.state.password}</h1>
<h1>{this.state.email}</h1>

<button onClick={this.myfun}>change</button>
</React.Fragment>
    )
}
}
export default State;
