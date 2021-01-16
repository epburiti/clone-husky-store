import styled from "styled-components";

export const CardProduct = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;

  .img {
    height: 100%;
    width: 35%;
    border-right: 1px solid black;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
    }
  }
  .content {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 75%;
    padding: 8px;
    .title-close {
      display: flex;
      button {
        display: flex;
        outline: none;
        cursor: pointer;
      }
    }

    .desc {
      font-size: 14px;
      line-height: 14px;
      color: rgb(87, 87, 87);
      max-width: 90%;
    }
    .amount-content {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      input {
        text-align: center;
      }
      .amount {
        display: flex;
      }
      button {
        cursor: pointer;
        outline: none;
        display: flex;
        justify-content: center;
      }
      .price {
        color: rgb(87, 87, 87);
        font-size: 18px;
        line-height: 21px;
        font-weight: bold;
      }
    }
  }
`;
export const CustomInput = styled.input`
  width: 20px;
  outline: none;
`;

export const Container = styled.div`
  font-family: "Roboto";
  transition: width 2s !important;
  background: #f1f1f1;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 3;
  width: 30%;
  height: 100%;
  min-height: auto;
  align-content: stretch;
  width: 370px;
  right: 0;
  flex-direction: column !important;
  @media (max-width: 500px) {
    width: auto !important;
  }

  .main {
    overflow: auto;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 10%;
    padding: 15px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 400;
    &:hover {
      p,
      path {
        color: black;
      }
      cursor: pointer;
    }
    p,
    path {
      color: rgb(87, 87, 87);
    }
    p {
      margin-left: 10px;
    }
  }
  hr {
    width: 100%;
    background: rgb(228, 228, 228);
    border-radius: 5px;
    height: 1px;
  }

  .main {
    height: 60%;
    padding: 20px;
    h5 {
      text-transform: uppercase;
      font-size: 24px;
      font-weight: bold;
      line-height: 28px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      letter-spacing: 0.05em;
      color: rgb(87, 87, 87);
      margin-bottom: 15px;
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -10px 15px;
    height: 30%;
    background-color: #ffffff;
    padding: 20px;
    p,
    strong {
      color: rgb(87, 87, 87);
      font-size: 14px;
    }

    .total {
      display: flex;
      font-size: 18px;
      line-height: 16px;
      margin-bottom: 3px;
    }
    .price {
      margin-left: auto;
      color: rgb(247, 162, 2);
      font-size: 25px;
      line-height: 16px;
    }
    .text-right {
      text-align: right;
      font-size: 14px;
      font-weight: 500;
      color: rgb(87, 87, 87);
    }
    .btns {
      align-items: center;
      display: flex;
      flex-direction: column;
      .orange {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px;
        border-radius: 5px;
        font-family: inherit;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 11px;
        color: rgb(255, 255, 255);
        border: 0px;
        text-align: center;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        cursor: pointer;
        height: 40px;
        background: rgb(247, 162, 2);
        width: 68%;
        margin: 0px;
        font-size: 14px !important;
      }
      .light {
        background: transparent;
        border: 0px;
        box-shadow: none;
        color: rgb(101, 101, 101);
        border-radius: 5px;
        font-family: inherit;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 11px;
        border: 0px;
        text-align: center;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        cursor: pointer;
        height: 40px;
        width: 68%;
        margin: 0px;
        font-size: 14px !important;
      }
    }
  }
`;
