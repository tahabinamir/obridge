import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";

import {
  GridContainer,
  GridItem,
  Small,
  Danger,
  Warning,
  Success,
  Info,
  Primary,
  Muted,
  Quote,
  Card,
  CardFooter,
  CardHeader,
  CardBody
} from "../../components/";
import image from "../../assets/img/faces/avatar.jpg";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
const useStyles = makeStyles(styles);

export default function Services() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <div className={classes.title}>
              <h2 className={classes.title}>Services</h2>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}></div>
              <p>
                <h6 className={classes.title}>
                  Our corporate philosophy is driven by the difference we desire
                  to see in the world.
                </h6>
                <h6 className={classes.title}>
                  Impassioned with unwavering diligence, we are a set of
                  idiosyncratic individuals aspiring to become propellants for
                  such change - in every way our collective competence allows.{" "}
                </h6>
                <h6 className={classes.title}>
                  With this in mind, Obridge offers a ‘single window solution’
                  to prospective clients where all needs can be met in one
                  place, from a sole provider.
                </h6>
                <h6 className={classes.title}>
                  In essence, making us the facilitators and the enablers for
                  ventures you want to add value to.
                </h6>
              </p>
            </div>
          </div>
        </div>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader>
                <h4>Marketing Strategies</h4>
              </CardHeader>
              <CardBody>
                <h6>Card Body</h6>
              </CardBody>
              <CardFooter>
                <h4>Card Footer</h4>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <h3>
              <small>Digital Marketing</small>
            </h3>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
