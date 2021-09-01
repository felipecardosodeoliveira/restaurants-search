import React from 'react';

import { Restaurant, RestaurantInfo, Title, Address } from './style'

const RestaurantCard = () => {
    return (
        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do Restaurante</Title>
                <p>Avaliação</p>
                <Address>Rua Rio de Janeiro, 10</Address>
            </RestaurantInfo>
        </Restaurant>
    )
}

export default RestaurantCard;