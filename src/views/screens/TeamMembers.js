import React from "react";
import Team from "./Team";
import Usama from "../../assets/img/faces/usama.jpeg";
import Shahzeb from "../../assets/img/faces/shahzeb.jpg";
import Aliawan from "../../assets/img/faces/aliawan.jpg";
import Asad from "../../assets/img/faces/asad.jpg";
import Maryam from "../../assets/img/faces/maryam.jpeg";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import { GridContainer } from "../../components";

export default function TeamMember() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <GridContainer>
        <Team
          Name="Usama Bin Akhtar"
          Description="Sab ko kaam deta hoon phir so jata hoon"
          Position="CEO"
          Avatar={Usama}
        ></Team>

        <Team
          Name="Shazz Boi"
          Description="Sab kuch kar leta hoon mein"
          Position="Marketing"
          Avatar={Shahzeb}
        ></Team>

        <Team
          Name="Ali Awan"
          Description="Adobe Shadobe wagera bro animations"
          Position="Graphic Designer Boi"
          Avatar={Aliawan}
        ></Team>

        <Team
          Name="Asad Saeed"
          Description="Udaas atma that knows to code"
          Position="Developer"
          Avatar={Asad}
        ></Team>
      </GridContainer>
      <div></div>
    </div>
  );
}
