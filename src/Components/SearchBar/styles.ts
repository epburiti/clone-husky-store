import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  height: 20vh;
  margin: 0 auto;
  top: 90vh;
  left: 1%;
  position: absolute;
  > div {
    width: 98%;
    height: 100%;
    border-radius: 14px;
  }
  .card:nth-child(1) {
    background-image: url("https://static.kabum.com.br/conteudo/whitelabel/102/category-banner-left.png");
    background-size: 100% 100%;
    background-position: center;
    margin: 0 2% 0 0;
  }
  .card:nth-child(2) {
    background-image: url("https://static.kabum.com.br/conteudo/whitelabel/102/category-banner-right.png");
    background-size: 100% 100%;
    background-position: center;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Container = styled.div`
  color: black;
  width: 98%;
  height: 13vh;
  border-radius: 14px;
  position: absolute;
  left: 1%;
  background-color: var(--modalsColor);
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    top: 75vh;
    >div{
      display:none;
    }
  }
  @media (max-width: 1000px) {
    /* >ul li:nth-child( n + 2 ) {
      display:none;
    } */
    display: grid;
    grid-template-columns: 1fr 1fr;
    ul {
      display: block;
      li a {
        font-size: 11px !important;
      }
      li:nth-child(n + 2) {
        display: none;
      }
    }
    >div{
      display:block;
      margin: 0 auto;
      label{
        color:var(--black);
        font-weight:400;
      }
    }
  }
  select{
    color: black;
    font-weight: bold;
  }
  > ul {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr;

    > li {
      display: flex;
      align-items: center;
      list-style: none;
    }
    > li a {
      text-decoration: none;
      color: var(--black);
      font-size: 15px;
    }
  }
  > ul li div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;

    > input {
      background-color: var(--white);
      width: 45vw;
      height: 7vh;
      border-radius: 10px;
      margin-top: 3%;
      color: black;
    }
    > button {
      margin-top: 3%;
      width: 2vw;
      height: 7vh;
      background-color: var(--white);
      border-radius: 10px;
      margin-left: -30px;

      > svg {
        border-radius: 10px;
        margin-top: 3%;

        font-size: 16px;
        > path {
          color: black;
        }
      }
    }
  }
`;
