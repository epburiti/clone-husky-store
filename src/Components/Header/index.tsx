import React  from 'react';
import {BsPeopleCircle, BsFillHeartFill} from 'react-icons/bs';
import {FaShoppingCart} from 'react-icons/fa';

import { Container, NavBar } from './styles';

import top_logo from "../../Assets/top_logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <ul>
          <li className="logo"><a href="#"><figure><img src={top_logo} alt="Logo navbar"/></figure></a></li>
          <li  className="about"><a href="#">SOBRE NÓS</a></li>
          <li  className="myaccount"><a href="#"><BsPeopleCircle/>MINHA CONTA</a></li>
          <li  className="fav"><a href="#"><BsFillHeartFill/>FAVORITOS</a></li>
          <li  className="itens"><a href="#"><FaShoppingCart/>ITENS</a></li>    
        </ul>
      </NavBar>
    </Container>
  );
}

export default Header;