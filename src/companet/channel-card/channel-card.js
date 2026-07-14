import React from 'react';
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";


function ChannelCard({channel,}) {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width:{
                    xs:"260px",
                    sm:"300px"
                },
                height:"98%",
                p:3,
                background: 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)',


            }}
        >

            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white'
                }}
            >
                <CardMedia
                    image={channel?.snippet?.thumbnails.high.url}
                    alt={channel?.snippet?.title}
                    sx={{
                        borderRadius: '50%',
                        height:{
                            xs:120,
                            sm:180
                        },
                        width:{
                            xs:120,
                            sm:180
                        },
                        mb: 2,
                    }}
                />


                <Typography variant={'h6'}>
                    {channel?.snippet?.title}{' '}
                    <CheckCircle sx={{fontSize: '14px', color: 'white', ml: '5px'}}/>
                </Typography>
                {channel?.statistics?.subscriberCount && (
                    <Typography sx={{fontSize: '15px', fontWeight: 'bold', color: 'white'}}>
                        {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-Us')} Subscribers
                    </Typography>
                )}

            </CardContent>
        </Box>
    );

}

export default ChannelCard;