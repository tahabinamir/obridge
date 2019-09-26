import React, { Component } from "react";
import CustomSvg from "../../components/ProgressBars/CustomSvg";
import ObridgeSvg from "../../components/ProgressBars/ObridgeSvg";
import BackgroundHeader from "../../assets/images/brand/bg-01.png";
const styles = {
  paperContainer: {
    height: 1000,
    backgroundImage: `url(${BackgroundHeader})`
  }
};

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div style={styles.paperContainer}>
        <CustomSvg></CustomSvg>
        <ObridgeSvg></ObridgeSvg>
      </div>
    );
  }
}

export default Loading;
