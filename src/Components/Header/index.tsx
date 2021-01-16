import React, { useEffect } from "react";
import { BsPeopleCircle, BsFillHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./../Modal";
import { Container, NavBar, NavBarResponsiva } from "./styles";
import * as ModalActions from "../../store/ducks/Modal/actions";
import top_logo from "../../Assets/top_logo.png";

export default function Header(props) {
  const visibleModal = useSelector((state) => state.modal);
  const cartSize = useSelector((state) => state.cart.length);
  const dispatch = useDispatch();
  function handleModal() {
    dispatch(ModalActions.toggle());
  }
  return (
    <>
      <NavBarResponsiva>
        <ul>
          <li>
            <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
          </li>
          <li className="logo">
            <a href="#">
              <figure>
                <img src={top_logo} alt="Logo navbar" />
              </figure>
            </a>
          </li>
          <li className="myaccount">
            <a href="#">
              <BsPeopleCircle />
            </a>
          </li>
          <li className="itens">
            <a href="#">
              <FaShoppingCart onClick={handleModal} />
            </a>
          </li>
        </ul>
        <div></div>
      </NavBarResponsiva>
      <Container>
        <NavBar>
          <ul>
            <li className="logo">
              <a href="#">
                <figure>
                  <img src={top_logo} alt="Logo navbar" />
                </figure>
              </a>
            </li>
            <li className="about">
              <a href="#">SOBRE NÓS</a>
            </li>
            <li className="myaccount">
              <a href="#">
                <BsPeopleCircle />
                MINHA CONTA
              </a>
            </li>
            <li className="fav">
              <a href="#">
                <BsFillHeartFill />
                FAVORITOS
              </a>
            </li>
            <li className="itens" onClick={() => handleModal()}>
              <a href="#">
                <FaShoppingCart />
                <span>{cartSize}</span>ITENS
              </a>
            </li>
          </ul>
        </NavBar>
      </Container>

      {visibleModal && <Modal />}
    </>
  );
}
