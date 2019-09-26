import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as ReactLogo } from "../../assets/img/svgs/obridge.svg";

const circlePulse = (colorOne, colorTwo) => keyframes`
0% {
  fill:${colorOne};
  stroke-width:10px
}
50% {
  fill:${colorTwo};
  stroke-width:2px
}
100%{
  fill:${colorOne};
  stroke-width:10px
}
`;
const StyledCircle = styled.svg`
  margin: auto;
  display: inline-block;
`;
const StyledInnerCircle = styled.circle`
  animation: ${props => circlePulse(props.colorOne, props.colorTwo)} infinite 4s
    linear;
`;

const circleOne = (
  <StyledCircle colorOne="red" colorTwo="green" height="100" width="100">
    <StyledInnerCircle
      colorOne="palevioletred"
      colorTwo="mediumslateblue"
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      stroke-width="3"
    />
  </StyledCircle>
);
const circleTwo = (
  <StyledCircle colorOne="red" colorTwo="green" height="100" width="100">
    <StyledInnerCircle
      colorOne="tomato"
      colorTwo="hotpink"
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      stroke-width="3"
    />
  </StyledCircle>
);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fade = keyframes`
0% {
fill:"red";
stroke-width:10px
}
50% {
 fill:"blue";
 stroke-width:2px
}
100%{
  fill:"red";
  stroke-width:10px
}
`;

const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(0.8);
  opacity: 0;
  transform-origin: center;
}
`;

const StyledLogo = styled(ReactLogo)`
  animation: ${pulse} infinite 2s linear;
  top: 45%;
  left: 45%;
  height: 10rem;
  width: 10rem;
  display: inline-block;
  margin: auto;
`;

export default function ObridgeSvg() {
  return <StyledLogo />;
}
{
  /*
      <div style={{ width: "200px", margin: "auto" }}>
        {circleTwo}
        {circleOne}
        {circleOne}
        {circleTwo}
      </div>
    </div>
*/
}
