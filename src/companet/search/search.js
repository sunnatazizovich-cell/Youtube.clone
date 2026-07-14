import React, {useEffect, useState} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {colors} from "../constants/constants";
import {ApiService} from "../api-service/api-service";
import Video from "../video/video";

const Search = () => {
    const [searchVideo, setSearchVideo] = useState([])
    const {id} = useParams()

    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${id}`).then(data => setSearchVideo(data.items))
    }, [id])

    return (
      <Box p={2} mt={'50px'} sx={{minHeight: '100vh'}}>
          <Container maxWidth={'90%'}>
              <Typography variant={'h3'} sx={{fontWeight: 'bold'}}>
                  Search for results <span style={{color: colors.color}}>{id}</span> videos
              </Typography>
              <Video data={searchVideo}/>
          </Container>
      </Box>
    );
}

export default Search;