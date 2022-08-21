import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import {Searchbar,Videolist,Videodetail} from './components';


class App extends React.Component {
    state ={
        videos:[],
        selectVideo:null,
    }
    componentDidMount(){
        this.handleSubmit("top trending on you tube")

    }

    onVideoSelect =(video) =>{
        this.setState({selectedVideo:video})
    }
    handleSubmit =async (searchTerm) =>{
        const response =await youtube.get('search',{
            
            params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyC4Qif8yruIRIcO2tvtpOWGztPusCys21I',
                q:searchTerm, 
        
            }
        });

        this.setState({videos:response.data.items, selectedVideo: response.data.items[0] });


        // console.log(response.data.items);
    }
    render (){
        const { selectedVideo ,videos} =this.state;
        return (
           <Grid justifyContent ="center" container spacing ={10}>
           <Grid item xs ={12}>
               <Searchbar onFormSubmit ={this.handleSubmit} />
           </Grid>
           <Grid item xs ={8}>
           <Videodetail video ={selectedVideo}/>
 
           </Grid>

           <Grid item xs ={4}>
           <Videolist  videos={videos} onVideoSelect ={this.onVideoSelect} />

           </Grid>
           </Grid>
        )
    }
    
} 

// const App =()=>{
//     return <h1>you tube clone app</h1>
//}
export default App; 
