import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, CardProduct, CustomInput } from "./styles";
import {
  AiOutlineClose,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import * as CartActions from "../../store/ducks/Cart/actions";
import * as ModalActions from "../../store/ducks/Modal/actions";
import { formatPrice } from "./../../utils/format";

export default function SearchBar() {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subTotal: product.price * product.amount,
    }))
  );
  const total = useSelector((state) =>
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  );
  const parcial = useSelector((state) =>
    state.cart.reduce((total, product) => {
      return total + (product.price * product.amount) / 12;
    }, 0)
  );

  const dispatch = useDispatch();
  useEffect(() => {}, []);
  function incrementAmount(params) {
    dispatch(CartActions.updateAmount(params.id, params.amount + 1));
  }
  function decrementAmount(params) {
    dispatch(CartActions.updateAmount(params.id, params.amount - 1));
  }
  function handleModal() {
    dispatch(ModalActions.toggle());
  }
  function handleRemoveProduct(id) {
    dispatch(CartActions.removeFromCart(id));
  }
  function handleClearCart() {
    dispatch(CartActions.clearCartRequest());
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
              <strong className="price">R$ {formatPrice(total)}</strong>
            </p>
            <p className="text-right">À VISTA NO BOLETO</p>
            <p className="text-right">
              OU EM 12X DE
              <strong>{formatPrice(parcial)}</strong>
              SEM JUROS
            </p>
          </div>
          <hr />

          <div className="btns">
            <button type="button" className="orange">
              Finalizar compra
            </button>
            <button type="button" className="light" onClick={handleClearCart}>
              Limpar carrinho
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
