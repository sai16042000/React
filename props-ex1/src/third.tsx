
import { Paper, Table, TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import React, { Component} from "react";

interface IProps{
    key1:string;
    key2:any[];
    key3:string;
    key4:any
}
interface IState{}
class Third extends Component<IProps,IState>{
    // // constructor(props:IProps){
    // //     super(props);
    // }

render(){
    return(
        <React.Fragment>
            <Typography variant="h4" color="secondary">{this.props.key1}</Typography>
            <Typography variant="h4" color="secondary">{this.props.key3}</Typography>
            <Typography variant="h4" color="secondary">{this.props.key4}</Typography>
           <TableContainer component={Paper}>
               <Table>
                   <TableHead>
                     <TableRow>
                     <TableCell>sno</TableCell>
                         <TableCell>image</TableCell>
                         </TableRow>  
                   </TableHead>
                   <TableBody>
                       {this.props.key2.map((element,index)=>(
                        <TableRow key={index}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell><Avatar src={element.image}></Avatar></TableCell>
                        </TableRow>
                       ))}
                   </TableBody>
               </Table>
           </TableContainer>
            


        </React.Fragment>
    )
}
}

export default Third;
