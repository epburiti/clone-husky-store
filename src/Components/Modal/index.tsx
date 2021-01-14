import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, CardProduct, CustomInput } from "./styles";
import {
  AiOutlineClose,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import * as CartActions from "../../store/module/Cart/actions";
import * as ModalActions from "../../store/module/Modal/actions";
import { formatPrice } from "./../../utils/format";

const SearchBar = ({
  cart,
  total,
  parcial,
  updateAmount,
  toggle,
  removeFromCart,
}) => {
  const visibleModal = useSelector((state) => state.modal);
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {}, []);
  function incrementAmount(params) {
    updateAmount(params.id, params.amount + 1);
  }
  function decrementAmount(params) {
    updateAmount(params.id, params.amount - 1);
  }
  function handleModal() {
    toggle();
  }
  function handleRemoveProduct(id) {
    removeFromCart(id);
  }
  return (
    <>
      <Container>
        <div className="header" onClick={() => handleModal()}>
          <AiOutlineClose />
          <p>Fechar</p>
        </div>
        <hr />

        <div className="main">
          <h5>Carrinho</h5>
          {cart.map((product, index) => (
            <CardProduct key={index}>
              <div className="img">
                <img src={product.img} alt="" />
              </div>
              <div className="content">
                <div className="title-close">
                  <p className="desc">{product.title}</p>
                  <button onClick={() => handleRemoveProduct(product.id)}>
                    <AiFillCloseCircle color="grey" size={20} />
                  </button>
                </div>

                <div className="amount-content">
                  <p className="price">
                    {product.price === product.subTotal &&
                      formatPrice(product.price)}
                    {product.price !== product.subTotal &&
                      formatPrice(product.subTotal)}
                  </p>
                  <div className="amount">
                    <button
                      type="button"
                      disabled={product.amount === 1}
                      onClick={() => decrementAmount(product)}
                    >
                      <AiFillMinusCircle
                        color={
                          product.amount === 1 ? "grey" : "rgb(247, 162, 2)"
                        }
                        size={20}
                      />
                    </button>
                    <CustomInput type="text" readOnly value={product.amount} />
                    <button
                      type="button"
                      onClick={() => incrementAmount(product)}
                    >
                      <AiFillPlusCircle color="rgb(247, 162, 2)" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </CardProduct>
          ))}
        </div>
        <div className="footer">
          <div>
            <p className="total">
              TOTAL
              <strong className="price">R$ {total}</strong>
            </p>
            <p className="text-right">À VISTA NO BOLETO</p>
            <p className="text-right">
              OU EM 12X DE
              <strong>{parcial}</strong>
              SEM JUROS
            </p>
          </div>
          <hr />

          <div className="btns">
            <button type="button" className="orange">
              Finalizar compra
            </button>
            <button type="button" className="light">
              Limpar carrinho
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total, product) => {
    return formatPrice(total + product.price * product.amount);
  }, 0),
  parcial: state.cart.reduce((total, product) => {
    return formatPrice(total + (product.price * product.amount) / 12);
  }, 0),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(Object.assign({}, CartActions, ModalActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
