import React from "react";
import { Typography } from "@mui/material";
import AboutSide from "../../assets/images/aboutSide.png";
import PageContainer from "../PageContainer";
import AboutTxt from "../AboutTxt";

const About = () => {
  return (
    <>
      <PageContainer
        Header="About Us"
        SideImage={AboutSide}
        Height='600'
        Content={
          <>
            <Typography
              align="center"
              sx={{ mt: 2 }}
              display={{ xs: "block", lg: "block" }}
            >
              <strong>{AboutTxt}</strong>
            </Typography>
          </>
        }
      />
    </>
  );
};

export default About;
