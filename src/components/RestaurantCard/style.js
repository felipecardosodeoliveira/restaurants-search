import styled from "styled-components";

export const Restaurant = styled.div`
    background-color: white;
    border-left: 5px solid transparent;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding: 16px;
    
    :hover {
        background-color: ${props => props.theme.colors.background};
        border-left: 5px solid ${props => props.theme.colors.primary};
    }

`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color:  ${props => props.theme.colors.text};
    font-family:  ${props => props.theme.fonts.regular};
    font-size: 24px;
    margin-bottom:10px;
    font-weight: bold;
    line-height: 29px;
`;

export const Address = styled.span`
    color:  ${props => props.theme.colors.text};
    font-family:  ${props => props.theme.fonts.regular};
    font-size: 16px;
    margin-bottom:10px;
    margin-top: 10px;
    line-height: 19px;
`;

export const RestaurantPhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;
`;