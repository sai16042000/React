
import React, {Component} from "react";
import Second from "./second";
interface IState{
    key1:string;
    key2:any[];
    key3:string;
};
interface IProps{};
class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            "key1":"Ekart",
            "key2":[{"image":"https://www.bing.com/images/blob?bcid=S0K9TzuCpskC2LabcHeyZFIvEvUT.....6I"},
            {"image":"https://www.bing.com/images/blob?bcid=Sy6dPnxk6skC2LabcHeyZFIvEvUT.....1s"}
            ],
            "key3":"copryright@ekart.com"
        };
    }
    render(){
        return(
            <React.Fragment>
                <Second key1={this.state.key1}
                        key2={this.state.key2}
                        key3={this.state.key3}></Second>
            </React.Fragment>
        )
    }

};
export default First;