import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';

import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';

import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Search, Carousel, Logo, Wrapper, CarouselTitle } from './style';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      setQuery(inputValue);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo restaurante" />
          <TextField
            outlined
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              type="text"
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Padaria" />
            <Card photo={restaurante} title="Hamburgueria" />
            <Card photo={restaurante} title="Restaurante" />
            <Card photo={restaurante} title="Lanches" />
          </Carousel>
          {/* <button onClick={() => setModalOpened(true)}>Abrir modal</button> */}
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
