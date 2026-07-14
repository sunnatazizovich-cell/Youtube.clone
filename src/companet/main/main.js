import React, {useEffect, useState} from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";

import Category from "../category/category";
import {colors,} from "../constants/constants";
import {ApiService} from "../api-service/api-service";
import Video from "../video/video";


const Main = () => {
    const [selectCategory, setSelectCategory] = useState('New')
    const [data, setData] = useState([])
    const selectHandler = (category) => setSelectCategory(category);

    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setData(data.items))
    }, [selectCategory])


    return (
        <Stack>
            <Category selectHandler={selectHandler} selectCategory={selectCategory}/>
            <Box p={2} sx={{minHeight: '90vh',}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectCategory} <span style={{color: colors.color}} >videos</span>
                    </Typography>
                </Container>
              <Video data={data}/>
            </Box>
        </Stack>
    );
}

export default Main;