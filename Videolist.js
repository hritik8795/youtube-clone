import React from 'react';

import {Grid} from '@material-ui/core';

import Videoitem from './Videoitem';

const Videolist =({videos,onVideoSelect})=>{
    const listOfVideos =videos.map((video,id) => <Videoitem onVideoSelect ={onVideoSelect} key ={id} video ={video}/> )
    return (
         <Grid container spacing={2}>
        {listOfVideos}
        </Grid>
    )
}
export default Videolist;