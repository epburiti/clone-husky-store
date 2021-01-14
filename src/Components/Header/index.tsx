import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BsPeopleCircle, BsFillHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Modal from "./../Modal";
import { Container, NavBar, NavBarResponsiva } from "./styles";

import top_logo from "../../Assets/top_logo.png";

const Header: React.FC = (props: any) => {
  const visibleModal = useSelector((state) => state.modal);
  const cartSize = useSelector((state) => state.cart.length);

  function handleModal() {
    const { dispatch } = props;
    dispatch({
      type: "toggle_modal",
    });
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
};

export default connect()(Header);
