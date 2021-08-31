import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
    background-image: url(${(props) => props.photo});
    border-radius: 6px;
    background-size: cover;
    height: 90px;
    width: 90px;
`;

const ImageCard = ({ photo }) => (
    <Card photo={photo} />
)

export default ImageCard;

