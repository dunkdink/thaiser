import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
  InfoBtnLink,
} from "./InfoDocElements";

const InfoDoc = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  isHowTo,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {isHowTo && (
                  <BtnWrap>
                    <BtnWrap>
                      {id === "Doc1" ? (
                        null
                      ) : id === "Doc2" ? (
                        <InfoBtnLink
                          to="/howto"
                          primary={primary ? 1 : 0}
                          dark={dark ? 1 : 0}
                          dark2={dark2 ? 1 : 0}
                        >
                          {buttonLabel}
                        </InfoBtnLink>
                      ) : id === "Doc3" ? (
                        <InfoBtnLink
                          to="/tools"
                          primary={primary ? 1 : 0}
                          dark={dark ? 1 : 0}
                          dark2={dark2 ? 1 : 0}
                        >
                          {buttonLabel}
                        </InfoBtnLink>
                      ) : null}
                    </BtnWrap>
                  </BtnWrap>
                )}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoDoc;
