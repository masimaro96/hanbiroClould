import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../../Box/Components/Box-Style.css'

function CardBox($title,$description) {

    return (
      <Box sx={CardWrapper}>
        <Box sx={TitleWrap}><Typography className="titlecard normal narrow" sx={CardTitle} variant="h6">{$title}</Typography></Box>
        <Box sx={TextWrap}><Typography className="textcard normal" sx={CardText}>{$description}</Typography></Box>
      </Box>
    );
};


const CardWrapper = {
    padding: "20px",
    border: "#ebebeb solid 1px",
    background: "#FFFFFF",
    boxShadow: "0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)",
    borderRadius: "4px",
    height: "100%",
}

const CardTitle = {
    textAlign: "left",
    fontWeight: "bold",
}

const CardText = {
    textAlign: "left",
}

const TitleWrap = {
    height: "100px",
}

const TextWrap = {
    paddingTop: "5px",
}

export default CardBox;