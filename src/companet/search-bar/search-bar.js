import React, {useState} from 'react';
import {Paper} from "@mui/material";
import {colors} from "../constants/constants";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";

function SearchBar() {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const getValue = (e) => {
        setValue(e.target.value)
    }

    const searchHandler = (e) => {
        e.preventDefault()
        if (value) {
            navigate(`search/${value}`)
        }
        setValue('')
    }

    return (
        <Paper
            component="form"
            onSubmit={searchHandler}
            sx={{
                display:"flex",
                alignItems:"center",

                width:{
                    xs:"100%",
                    sm:"350px",
                    md:"420px"
                },

                border:`1px solid ${colors.color}`,
                boxShadow:"none",
                pl:2
            }}
        >
            <input type="text" onChange={getValue} placeholder='Search....' className='search-bar' value={value}/>
            <IconButton>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;