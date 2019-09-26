import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <GridContainer>
      <GridItem>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/images/brand/landingpage.jpg")}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/images/brand/landingpage.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </GridItem>
    </GridContainer>
  );
}

export default ControlledCarousel;
