import React, {Component} from "react";


interface IState{}
interface IProps{
    key1:string;
    key2:any[];
    key3:string
}
class Second extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.key1}</h1>
                 {this.props.key2.map((element,index)=>(
                  <h2><img width="300" height="300" src={element.image} alt={element.name}></img></h2>
                 ))}
                <h3>{this.props.key3}</h3>
            </React.Fragment>
        )
    }

}
export default Second;