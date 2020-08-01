import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";


import { Container,Cards } from './styles';
import { BsCardChecklist } from 'react-icons/bs';

const SearchBar: React.FC = () => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <div>
              <input type="text" name="search" id="search"/>
              <button><AiOutlineSearch /></button>
            </div>
         </li>
          <li>
            <a href="#">ACESSÓRIOS</a>
          </li>
          <li>
            <a href="#">CADEIRA GAMER</a>
          </li>
          <li>
            <a href="#">PERIFÉRICOS</a>
          </li>
        </ul>


      </Container>
        <Cards>
          <div className="card"></div>
          <div className="card"></div>
        </Cards>
    </>
  );
}

export default SearchBar;