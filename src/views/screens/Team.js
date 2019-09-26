import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridContainer,
  GridItem,
  Button,
  Card,
  CardBody,
  CardFooter
} from "../../components";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

//import team2 from "../../assets/img/faces/christian.jpg";
//import team3 from "../../assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function Team(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card>
        <br />
        <br />
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img src={props.Avatar} alt="..." className={imageClasses} />
        </GridItem>
        <h4 className={classes.cardTitle}>
          {props.Name}
          <br />
          <small className={classes.smallTitle}> {props.Position} </small>
        </h4>
        <CardBody>
          <p className={classes.description}>{props.Description}</p>
        </CardBody>
      </Card>
    </GridItem>
  );
}
