import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../api-service/api-service";
import {Container} from "@mui/material";
import ChannelCard from "../channel-card/channel-card";
import Video from "../video/video";
import Box from "@mui/material/Box";


const Channel = () => {
    const {id} = useParams()
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideos, setChannelVideo] = useState([])


    useEffect(() => {
        ApiService.fetching(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data.items[0]))
        ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(dataVideo => setChannelVideo(dataVideo.items))
    }, [id])


    return (
        <Box minHeight={'95vh'}>
            <Box>
                <Box
                    sx={{
                        width: "100%",
                        height: {
                            xs: 140,
                            sm: 180,
                            md: 250
                        },
                        backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: {
                            xs: -8,
                            sm: -10,
                            md: -12
                        },
                        position: "relative",
                        zIndex: 10
                    }}
                >
                    <ChannelCard channel={channelDetail}/>
                </Box>

                <Container maxWidth="xl" sx={{mt:4}}>
                    <Video data={channelVideos}/>
                </Container>
            </Box>
        </Box>
    );
}

export default Channel;