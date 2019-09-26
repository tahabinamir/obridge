import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// core components
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Button from "./components/CustomButtons/Button.js";
import Parallax from "./components/Parallax/Parallax.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";

import { BrowserRouter } from "react-router-dom";
import ControlledCarousel from "./views/layout/ControlledCarousel";
import TeamMembers from "./views/screens/TeamMembers";
import NavHeader from "./views/layout/NavHeader";
import BackgroundHeader from "./assets/images/brand/bg-01.png";
import Loading from "./views/screens/Loading";
import About from "./views/screens/About";
import Vision from "./views/screens/Vision";
import Services from "./views/screens/Services";
import Components from "./views/Components/Components";

// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "./assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function App(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <BrowserRouter>
      <Header
        brand="Objective Bridge"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("./assets/images/brand/landingpage.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Obridge</h1>
                <h3 className={classes.subtitle}>
                  The bridge between you and opportunities.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <About />
        <Vision />
        <Services />
        <ControlledCarousel></ControlledCarousel>

        <TeamMembers />
      </div>
    </BrowserRouter>
  );
}

{
  /*
       <Parallax
              filter
              image={require("./assets/images/brand/landingpage.jpg")}
            />
  */
}
