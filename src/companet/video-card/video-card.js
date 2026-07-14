import React from 'react';
import {Avatar, Card, CardContent, CardMedia,  Stack, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import moment from "moment";
import {Link} from "react-router-dom";

const VideoCard = ({video}) => {
    return (
        <Card
            sx={{
                width: {
                    xs: "100%",
                    sm: "320px",
                    md: "298px",
                    lg: "310px",
                },
                boxShadow: "none",
                borderRadius: "5px",
            }}
        >
           <Link to={`/video/${video?.id?.videoId}`}>
              <CardMedia
                  image={video?.snippet?.thumbnails?.high?.url}
                  alt={video?.snippet?.title}
                  sx={{  height: '180px'}}
              />
           </Link>
          <CardContent
              sx={{
                  background: '#062975',
                  height: '210px',
                  position: 'relative',
                  color:'white'
              }}>
                 <Link to={`/video/${video?.id?.videoId}`}>
                     <Typography my={'5px'} sx={{opacity: '4',fontSize:'12px',color:'white'}}>
                         {moment(video?.snippet?.publishedAt).fromNow()}
                     </Typography>
                     <Typography variant='subtitle1' fontWeight={'bold'} sx={{color:'white'}}>
                         {video?.snippet?.title.slice(0, 50)}
                     </Typography>
                     <Typography sx={{color:'white'}}>
                         {video?.snippet?.description.slice(0, 50)}
                     </Typography>
                 </Link>
                 <Link to={`/channel/${video?.snippet?.channelId}`}>
                     <Stack
                         direction={'row'}
                         position={'absolute'}
                         bottom={'10px'}
                         alignItems={'center'}
                         gap={'5px'}
                     >
                         <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                         <Typography sx={{color: 'white'}} variant={'subtitle2'}>
                             {video?.snippet?.channelTitle}
                             <CheckCircle sx={{fontSize: '12px', color: '#499A13', ml: '5px'}}/>
                         </Typography>
                     </Stack>
                 </Link>
              </CardContent>
       </Card>
    );
}

export default VideoCard;