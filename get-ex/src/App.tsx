  
//import Component
import React, { Component } from "react";


//import axios
import axios from "axios";
import { TableContainer } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { Paper } from "@material-ui/core";


//state
interface IState{
  data : any
};


//props
interface IProps{

}
class App extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            data : []
        }
    };
    componentDidMount(){
       axios.get("https://restcountries.eu/rest/v2/all").then((posRes)=>{
            this.setState({
              data : posRes.data
            })
       },(errRes)=>{

       });
    }
    render(){
      return(
        <React.Fragment>
        <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                    <TableCell>SNO</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>REGION</TableCell>
                    <TableCell>SUBREGION</TableCell>
                    <TableCell>POPULATION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                   {this.state.data.map((element:any,index:any)=>(
                      <TableRow>
                         <TableCell>{index+1}</TableCell>
                         <TableCell>{element.name}</TableCell>
                         <TableCell>{element.region}</TableCell>
                         <TableCell>{element.subregion}</TableCell>
                         <TableCell>{element.population}</TableCell>
                      </TableRow>
                   ))}
              </TableBody>
            </Table>
        </TableContainer>
     </React.Fragment>
      )
    }
};

export default App;