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

export default function Vision() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <div className={classes.title}>
              <h2 className={classes.title}>Vision</h2>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}></div>
              <p>
                <h4 className={classes.title}>Innovate</h4>
                <h6 className={classes.title}>
                  At Obridge, we believe the ‘visionary’ should become the
                  ‘visible’. We pride ourselves in the creation of new and
                  unfound ideas as well as the innovative actualisation of
                  yours.
                </h6>
                <h4 className={classes.title}>Elevate </h4>
                <h6 className={classes.title}>
                  Your trust is a valued privilege that is central to our desire
                  of ensuring product optimisation. Our team continuously
                  challenges the output of the objectives you set us -
                  identifying and instigating pivotal opportunities for
                  entrepreneurial improvement.
                </h6>
                <h4 className={classes.title}>Propagate </h4>
                <h6 className={classes.title}>
                  As a company based in Islamabad, we have big aspirations that
                  extend beyond the city. We want to inspire the promotion of
                  positive change in the world - reform the way we as people,
                  limit ourselves when it comes to the ideas we have the natural
                  ingenuity to think of.
                </h6>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
