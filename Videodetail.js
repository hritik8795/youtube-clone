import React from 'react';

import  {Paper,Typography } from '@material-ui/core'

const Videodetail =({ video })=>{
    if(!video) return <div>Loading....</div>

    console.log(video);

    const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <React.Fragment>
      <Paper elevation ={6} style ={{height:'70%'}}>
      <iframe frameBorder ="0" height ="100%" width ="100%" title ="video player" src ={videoSrc}/>
      </Paper>
      <Paper elevation ={6} style ={{padding:'15px'}}>
      <Typography varient ="h4">{video.snippet.title}-{video.snippet.channelTitle}</Typography>
      <Typography varient ="subtitle1">{video.snippet.channelTitle}</Typography>
      <Typography varient ="subtitle2">{video.snippet.description}</Typography>
      </Paper>
      </React.Fragment>
    )
}
export default Videodetail;