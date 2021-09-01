import styled from "styled-components";

import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
`;

export const Search = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 3em;

`;

export const Logo = styled.img`
  margin: 25px;
`;

export const Map = styled.div`
    padding: 1em;
`;

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 16px;
    }
`;


export const CarouselTitle = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 24px;
    font-weight: bold;
    margin: 16px 0;
    line-height: 29px;
`;


export const Container = styled.aside`
    /* background-color: ${(props) => props.theme.colors.background}; */
    background-color: white;
    box-sizing: border-box;
    height: 100vh;
    overflow-y: auto;
    width: 360px
`;




