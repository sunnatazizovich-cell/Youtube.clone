import React from 'react';
import { Stack, Button } from "@mui/material";
import { categories } from "../constants/constants";
import './category.css'
const Category = ({ selectHandler, selectCategory }) => {
    return (
        <Stack classname='category-wrapper'
            sx={{
                overflow: "hidden",
                width: "100%",
                py: 1,
            }}
        >
            <Stack
                direction="row"
                classname='category-scroll'
                sx={{
                    width: "max-content",
                    animation: "scroll 25s linear infinite",

                    "&:hover": {
                        animationPlayState: "paused",
                    },

                    "@keyframes scroll": {
                        from: {
                            transform: "translateX(0)",
                        },
                        to: {
                            transform: "translateX(-50%)",
                        },
                    },
                }}
            >

                {[...categories, ...categories].map((itm, index) => (
                    <Button
                        key={index}
                        onClick={() => selectHandler(itm.name)}
                        startIcon={itm.icon}
                        sx={{
                            flexShrink: 0,

                            mx: { xs: 0.5, sm: 1 },

                            textTransform: "capitalize",

                            borderRadius: "25px",

                            px: {
                                xs: 1.5,
                                sm: 2,
                                md: 2.5,
                            },

                            py: {
                                xs: 0.7,
                                sm: 0.9,
                                md: 1,
                            },

                            fontSize: {
                                xs: "13px",
                                sm: "14px",
                                md: "16px",
                            },

                            fontWeight: "bold",

                            color:
                                selectCategory === itm.name
                                    ? "#fff"
                                    : "#062975",

                            backgroundColor:
                                selectCategory === itm.name
                                    ? "#062975"
                                    : "transparent",

                            "&:hover": {
                                backgroundColor: "#062975",
                                color: "#fff",
                            },
                        }}
                    >
                        {itm.name}
                    </Button>
                ))}

            </Stack>
        </Stack>
    );
};

export default Category;