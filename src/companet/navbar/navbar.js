import React from 'react';
import {Stack} from "@mui/material";
import {bgColor, logo} from "../constants/constants";
import Box from "@mui/material/Box";
import SearchBar from "../search-bar/search-bar";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate()

    return (
        <Stack direction="row"
               justifyContent="space-between"
               alignItems="center"
               flexWrap="wrap"
               gap={2}
               p={2}
               sx={bgColor}>

            <Link to={'/'}>
            <img src={logo}
                 alt="logo"
                 style={{
                     height: 45,
                     maxWidth: "100%",
                     mixBlendMode: "multiply",
                     filter: "contrast(150%)"
                 }}/>
            </Link>
            <SearchBar/>
            <Box/>
        </Stack>
    );
}

export default Navbar;