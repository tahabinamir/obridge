import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  Quote
} from "../../components/";
import image from "../../assets/img/faces/avatar.jpg";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <div className={classes.title}>
              <h2 className={classes.title}>About Us</h2>
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
      </div>
    </div>
  );
}
