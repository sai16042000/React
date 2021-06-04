import React, {Component} from "react";
interface IState{}
interface IProps{}
class App extends Component<IProps,IState>{
  username=React.createRef<HTMLInputElement>();
  userpwd=React.createRef<HTMLInputElement>();
  constructor(props:IProps){
    super(props);
  };
  login = ()=>{
    if( this.username.current?.value === "admin" && this.userpwd.current?.value === "admin" ){
      alert("Login Success");
    }else{
      alert("Login Fail");
    }
};
  render(){
    return(
      <React.Fragment>
         <input type="text" ref={this.username}></input>
              <br></br><br></br>
              <input type="password" ref={this.userpwd}></input>
              <br></br><br></br>
              <button onClick={this.login}>Login</button>
      </React.Fragment>
    )
  }
}
export default App;