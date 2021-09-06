import React from 'react';

import ReactStars from 'react-rating-stars-component';

import restaurante from "../../assets/restaurante-fake.png";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style'

const RestaurantCard = () => {
    return (
        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do Restaurante</Title>
                <ReactStars
                    count={5} isHalf edit={false} value={4} activeColor="#e7711c" />
                <Address>Rua Rio de Janeiro, 10</Address>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
        </Restaurant>
    )
}

export default RestaurantCard;