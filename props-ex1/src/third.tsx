
import React, { Component} from "react";

interface IProps{
    key1:string;
    key2:any[];
    key3:string;
    key4:any
}
interface IState{}
class Third extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

render(){
    return(
        <React.Fragment>
            {this.props.key1}..
            {JSON.stringify(this.props.key2)}..
            {this.props.key3}..
            {this.props.key4 }..


        </React.Fragment>
    )
}
}

export default Third;
