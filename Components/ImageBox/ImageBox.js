import React from "react";
import {
  IconDiv,
  ImageFive,
  ImageFour,
  ImageOne,
  ImageRowOne,
  ImageRowTwo,
  ImageSix,
  ImageThree,
  ImageTwo,
  ImageWrapper,
  RowContainer,
} from "./ImageStyles";

import Rectangle15 from "../../public/Image/Rectangle 15.jpg";
import Rectangle16 from "../../public/Image/Rectangle 16.jpg";
import Rectangle17 from "../../public/Image/Rectangle 17.jpg";
import Rectangle18 from "../../public/Image/Rectangle 18.jpg";
import Rectangle19 from "../../public/Image/Rectangle 19.jpg";
import Rectangle20 from "../../public/Image/Rectangle 20.jpg";
import { IoIosArrowForward } from "react-icons/io";

const ImageBox = () => {
  return (
    <ImageWrapper>
      <ImageRowOne>
        <ImageOne src={Rectangle15} />
        <ImageTwo src={Rectangle16} />
        <ImageThree src={Rectangle17} />
      </ImageRowOne>
      <RowContainer>
        <ImageRowTwo>
          <ImageFour src={Rectangle18} />
          <ImageFive src={Rectangle20} />
          <ImageSix src={Rectangle19} />
        </ImageRowTwo>
        <IconDiv>
          <IoIosArrowForward id="icon" size={60} />
        </IconDiv>
      </RowContainer>
    </ImageWrapper>
  );
};

export default ImageBox;
