import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
    background-image: url(${(props) => props.photo});
    border-radius: 6px;
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 90px;
    width: 90px;
`;

const Title = styled.span`
    color: white;
    font-family: ${props => props.theme.fonts.regular};
    font-size: 14px;
    margin: 15px 30px;
`;

const ImageCard = ({ photo, title }) => (
    <Card photo={photo} >
        <Title>{title}</Title>
    </Card>
)

export default ImageCard;

