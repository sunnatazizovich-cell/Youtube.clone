import React from 'react';
import { Stack, Button } from "@mui/material";
import { categories } from "../constants/constants";

const Category = ({ selectHandler, selectCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowX: "auto",
                overflowY: "hidden",
                px: { xs: 1, sm: 2, md: 3 },
                py: 1,
                gap: { xs: 1, sm: 1.5, md: 2 },
            }}
        >
            {categories.map((itm) => (
                <Button
                    key={itm.name}
                    onClick={() => selectHandler(itm.name)}
                    startIcon={itm.icon}
                    sx={{
                        flexShrink: 0,

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
    );
};

export default Category;