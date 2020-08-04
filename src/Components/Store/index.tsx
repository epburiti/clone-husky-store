import React, { useState } from "react";
import {useDispatch, useSelector, connect } from 'react-redux';


import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import { BsFilter, BsFillStarFill, BsHeart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

import { Container, Header, Body, Cards } from "./styles";
import itens from "../../Assets/itens";

import { updateAmount } from '../../actions/Cart';

const Store: React.FC = () => {
  const [minValue, setMinValue] = useState(734.89);
  const [maxValue, setMaxValue] = useState(2644.87);
  const cartSize = useSelector(state => state.cart.size)

  const handleChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  const PrettoSlider = withStyles({
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: "orange",
      border: "1px solid orange",
      marginTop: -12,
      marginLeft: -13,
      boxShadow: "orange 0 2px 2px",
      "&:focus, &:hover, &$active": {
        boxShadow: "orange 0 2px 3px 1px",
      },
      "& .bar": {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: "orange",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 8,
    },
    rail: {
      color: "grey",
      opacity: 0.5,
      height: 8,
    },
  })(Slider);

  const dispatch = useDispatch();
  const handleAddProduct = (product) =>{
    dispatch(updateAmount(product.id, product));
  }

  return (
    <Container>
      <Header>
        <h1>CADEIRAS GAMER</h1>
        <div className="filtros">
          <button>
            Filtros
            <BsFilter />
          </button>
          <div>
            <label htmlFor="">Listar Por: </label>
            <select id="tipoBusca" name="tipoBusca">
              <option value="mais_buscados">Mais buscados</option>
              <option value="preco_crescente">Preço crescente</option>
              <option value="mais_avaliados">Mais avaliadas</option>
              <option value="mais_recentes">Mais recentes</option>
              <option value="preco_decrescente">Preço decrescente</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Exibir: </label>
            <select id="quantidadeItens" name="quantidadeItens">
              <option value="6">6 itens por página</option>
              <option value="10">10 itens por página</option>
              <option value="30">30 itens por página</option>
              <option value="50">50 itens por página</option>
              <option value="100">100 itens por página</option>
            </select>
          </div>
        </div>
      </Header>
      <Body>
        <div className="div1">
          <p>Faixa de Preço</p>
          <div className="inputBorder">
            <label>
              De: <span>R$</span>
            </label>
            <input type="text" name="min" value={minValue} readOnly />
          </div>
          <div className="inputBorder">
            <label>
              Até: <span>R$</span>
            </label>
            <input type="text" name="max" value={maxValue} readOnly />
          </div>
          <div className="range-slider">
            <PrettoSlider
              valueLabelDisplay="auto"
              defaultValue={[minValue, maxValue]}
              min={734.89}
              max={2644.87}
              onChange={handleChange}
            />
          </div>
          <div className="buttons">
            <button type="button" name="" value="Limpar">
              Limpar
            </button>
            <button type="button" name="" value="Aplicar">
              Aplicar
            </button>
          </div>
        </div>

        <div>
          {itens.map((element) => {
            return (
              <Cards key={element.id}>
                <img src={element.img} alt="cadeira" />
                <div className="titleAndStars">
                  <p>{element.title}</p>
                  <div className="stars">
                    {(() => {
                      const icones = [<BsFillStarFill/>];

                      for (let i = 1; i < element.stars; i++) {
                        icones.push(<BsFillStarFill/>);
                      }

                      return icones;
                    })()}
                    ({element.votes})
                  </div>
                </div>
                <div className="div3">
                  <p className="preco orange">{element.price}</p>
                  <p className="p">
                    <strong>Valor à vista no boleto</strong>
                    ou até {element.plots}x de R$ {element.valOfProts} sem juros
                  </p>
                  <div className="card-section">
                    <button className="button" onClick={()=>handleAddProduct(element)}>COMPRAR</button>
                    <FaShoppingCart />
                    <BsHeart />
                  </div>
                </div>
              </Cards>
            );
          })}
        </div>
      </Body>
    </Container>
  );
};

export default connect()(Store);
