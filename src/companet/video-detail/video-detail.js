import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../api-service/api-service";
import {Avatar, Box, Chip, Stack, Typography} from "@mui/material";
import {CheckCircle, FavoriteOutlined, MarkChatRead, Visibility} from "@mui/icons-material";
import ReactPlayer from "react-player";
import Video from "../video/video";


const VideoDetail = () => {
    const {id} = useParams()
    const [videoDetail, setVideoDetail] = useState()
    const [suggestedVideo, setSuggestedVideo] = useState([])

    useEffect(() => {
        ApiService.fetching(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`).then(data => setVideoDetail(data.items[0]))
        ApiService.fetching(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`).then(suggestedVideo => setSuggestedVideo(suggestedVideo.items))
    }, [id])


    return (

        <Box minHeight={'90vh'} mb={10} mt={2}>
            <Box display={'flex'} sx={{flexDirection: {xs: 'column',sm:'column', md: 'row'}}}>
                <Box width={{xs: '100%', md: '75%'}}>
                    <Box
                        sx={{
                            width: "100%",
                            aspectRatio: "16 / 9"
                        }}
                    >
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                            width="100%"
                            height="100%"
                        />
                    </Box>
                    {videoDetail?.snippet?.tags?.map((item, idx) =>(
                      <Chip
                          label={item}
                          key={idx}
                          sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
                          variant='outlined'
                      />

                    ))}
                    <Typography variant='h5' fontWeight='bold' p={2}>
                        {videoDetail?.snippet?.title}
                    </Typography>
                    <Typography variant='subtitle2' p={2} sx={{opacity: '.7'}}>
                        {videoDetail?.snippet?.description}
                    </Typography>
                    <Stack direction='row' gap='20px' alignItems='center' py={1} px={2}>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                           <Visibility/>
                            {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <FavoriteOutlined/>
                            {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} like
                        </Stack>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <MarkChatRead/>
                            {parseInt(videoDetail?.statistics?.commentCount).toLocaleString()} comment
                        </Stack>
                    </Stack>
                    <Stack direction='row' py={2} px={1}>
                        <Stack direction='row' alignItems='center' gap='5px' marginTop='5px'>
                            <Avatar
                                alt={videoDetail?.snippet?.channelTitle}
                                src={videoDetail?.snippet?.thumbnails?.default.url}
                            />
                            <Typography variant='subtitle2' color='gray'>
                                {videoDetail?.snippet?.channelTitle}
                                <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                    width={{
                        xs: '100%', // Telefon
                        sm: '100%', // Planshet
                        md: '25%'   // Notebook/Kompyuter
                    }}
                    px={{ xs: 0, sm: 2, md: 2 }}
                    py={{ xs: 3, sm: 3, md: 1 }}
                    sx={{
                        maxHeight: {
                            xs: 'none',
                            sm: 'none',
                            md: '120vh'
                        },
                        overflowY: {
                            xs: 'visible',
                            sm: 'visible',
                            md: 'auto'
                        }
                    }}
                >
                    <Video data={suggestedVideo} />
                </Box>
            </Box>
        </Box>
    );
}

export default VideoDetail;