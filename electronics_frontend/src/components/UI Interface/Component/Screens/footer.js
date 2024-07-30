import { Input, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import "./footer.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//icon mui material 
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer()
{
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down("md"));
  const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));

     return (
      <footer className="main">
      <Grid  container
        direction={matches_md? ("column") : ("row")}
        justifyContent="center"
        alignItems="center" spacing={2}>
        <Grid xs className="Grid1">
          <div className="toptext">
          <h3>Connect with us</h3>
          <TextField id="Email ID" placeholder="Enter emiai ID" className="emailInput"/>
          </div>
          <div className="Icon">
            <YouTubeIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
          </div>  
            <p>© Copyright 2023 Croma. All rights reserved</p>
        </Grid>
        <Grid xs className="Grid2">
          <h2>Use full link</h2>
          <a href="#">About Croma</a>
        </Grid>
        <Grid xs className="Grid3">
          <h1>hed one th test </h1>
        </Grid>
      </Grid>
      </footer>
     );
}