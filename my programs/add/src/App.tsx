import React, {Component} from "react";
interface IState{
  a:any;
  b:any;
}
interface IProps{

}
class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
    this.state={
      a:10,
      b:20
    }
  }
  render(){
    return(
      <React.Fragment>
        {this.state.a+this.state.b}
      </React.Fragment>

    )
  }
}
export default App;