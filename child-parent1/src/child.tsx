import React, {Component} from "react";
interface IState{}
interface IProps{
    key1:(arg1:any)=>void;
}
class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={()=>{this.props.key1({"key1":"angular11","key2":1000,"key3":"ui full stack"})}}>change</button>
            </React.Fragment>
        )
    }
};
export default Child;