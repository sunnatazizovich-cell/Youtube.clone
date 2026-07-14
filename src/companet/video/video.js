import React from 'react';
import { Stack} from "@mui/material";
import VideoCard from "../video-card/video-card";
import Box from "@mui/material/Box";
import ChannelCard from "../channel-card/channel-card";

const Video = ({data}) => {
    return (
        <Stack
            width="100%"
            direction="row"
            flexWrap="wrap"
            justifyContent={{
                xs: "center",
                sm: "center",
                md: "flex-start",
            }}
            gap={2}
        >
            {data.map((item) => (
                <Box>
                    {item.id?.videoId && <VideoCard video={item}/>}
                    {item.id?.channelId && <ChannelCard channel={item}/>}
                </Box>
            ))}
        </Stack>
    );
}

export default Video;