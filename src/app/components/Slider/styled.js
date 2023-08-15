import styled,{ css } from 'styled-components';
import Slider from 'react-slick';

export const SliderCus = styled(Slider)`
  z-index: 99;
  .slick-list {
    width: 90vw;
    height: 200px;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    position: relative;
    .slide-title {
      position: absolute;
      bottom: 50px;
      width: 100vw;
      padding: 16px 100px;
      opacity: 0.8;
      background-image: linear-gradient(180deg, black, transparent);
      @media only screen and(max-width:768px) {
        padding: 16px;
      }
    }
  }
  &.logo {
      .slick-list {
        height: 150px !important;
      }
    }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 85vw;
  height: 250px;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media only screen and(max-width:768px) {
    height: 300px;
  }
  &.imageLogo{
    height: 180px;
    align-items: center;    
  }
`;

export const SlideTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  max-width: 50%;
  a,
  span {
    padding: 0 10px;
  };
  a {
    font-size: 1.2em;
    font-weight: 600;
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export const TitleSession = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 20px;
  margin: 24px 0 8px;
  box-shadow: inset 8px 0px 1px #dc362e;
  border-radius: 8px;
  h2 {
    &:hover {
      text-decoration: underline;
      opacity: 0.7;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
