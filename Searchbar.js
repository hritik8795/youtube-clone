import React from 'react';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class Searchbar extends React.Component {
    state ={
        searchTerm:'',
    }
    handleChange = (event) =>this.setState({searchTerm:event.target.value});

    handleSubmit =(event)=>{
        const {searchTerm} =this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
        
    }
    
    render(){
        return (
        <Paper elevation={6} style ={{padding:'25px'}}>
        <form onSubmit ={this.handleSubmit}>
        <TextField fullWidth label ="search..." id="fullWidth" onChange ={this.handleChange}/>
        </form>
      </Paper>
    )
     } 
 }
//const Searchbar =()=>{
    // return (
    //     <Paper elevation={6} style ={{padding:'25px'}}>
    //     <form onSubmit ={this.handleSubmit}>
    //     <TextField fullWidth label ="search..." id="fullWidth"/>
    //     </form>
    //   </Paper>
    // )
//}
export default Searchbar;