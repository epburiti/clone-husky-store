import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  margin: 19% auto 0 auto;
  @media (max-width: 1000px) {
    margin: 12% auto 0 auto;
  }
  @media (max-width: 700px) {
    margin: 29% auto 0 auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: var(--orangeWolf);
    width: 120px;
    height: 30px;
    margin-right: 4px;
    font-weight: bold;
    border-radius: 8px;
    display: none;
  }
  h1,
  label {
    color: var(--black);
  }
  h1 {
    font-size: 25px;
    letter-spacing: 2px;
  }
  > div {
    background-color: var(--modalsColor);
    width: 40vw;
    height: 60px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    select {
      background-color: var(--orangeWolf);
      option {
        color: var(--modalsColor);
      }
    }
  }
  @media (max-width: 1000px) {
    .div1 div {
      display: none;
    }
    h1 {
      font-size: 16px;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg {
        color: var(--modalsColor);
        font-size: 18px;
        margin-left: 8%;
      }
    }
    div {
      background-color: var(--white);
    }
    .filtros{
      div{
        display:none;
      }
      button{
        color:var(--modalsColor)
      }
    }
  }

  @media (max-width: 600px) {
   
  }
`;

export const Body = styled.div`
  @media (max-width: 1000px) {
    > div:nth-child(1) {
      display: none;
    }
   
  }
  display: flex;
  > div {
    margin-top: 4%;
  }
  .div1 div,
  p {
    margin: 2% auto;
    width: 74%;
    
  }
  > div:nth-child(1) {
    width: 28vw;
    height: 200px;
    background-color: var(--modalsColor);
    border-radius: 10px;
    padding: 10px;
  }
  > div:nth-child(n + 2) {
    width: 100%;
  }

  /* for ranger */
  .MuiSlider-track {
    color: orange;
  }
  .PrivateValueLabel-label-9 {
    color: white;
  }
  .PrivateValueLabel-circle-8 {
    color: orange;
  }
  button {
    width: 80px;
    height: 30px;
    margin-right: 4px;
    font-weight: bold;
    border-radius: 8px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  button:nth-child(1) {
    background-color: var(--modalsColor);
    color: var(--black);
  }
  button:nth-child(2) {
    background-color: var(--orangeWolf);
    color: var(--modalsColor);
  }
  input[type="range"] {
    width: 100%;
  }
  label,
  p {
    color: black;
  }
  p {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 500;
    /* opacity:0.6; */
  }
  .inputBorder {
    border: 1px solid var(--fontFooter);
    border-radius: 4px;
    display: flex;
    padding: 5px 12px;
    label {
      display: flex;
      > span {
        opacity: 1 !important;
        margin-right: 4px;
      }
    }
    input[type="text"],
    label > span {
      color: var(--orangeWolf);
      font-weight: bold;
    }
    span {
      margin-left: 8px;
      opacity: 1 !important;
    }
  }
`;

export const Cards = styled.section`
box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px;
  cursor: pointer;
  width: 72vw;
  height: 200px;
  background-color: var(--modalsColor);
  border-radius: 10px;
  /* padding: 20px; */
  margin: 0 0 2% auto;
  display: flex;
  justify-content: space-between;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 2px 1px;
  }
  img {
    width: 13vw;
    border-radius: 10px;
  }
  .button {
    background: var(--orangeWolf) !important;
    color: var(--modalsColor) !important;
    cursor: pointer;
  }

  .card-section {
    display: flex;
    justify-content: space-around;
    width: 70%;
    align-items: center;
    path {
      color: var(--black);
    }
    svg {
      /* margin-left:1% !important; */
    }
  }
  .orange {
    color: orange;
  }

  .titleAndStars {
    display: flex;
    flex-direction: column;
    margin: 4vh 0 0 1vh;
    > p {
      margin: 0;
      font-size: 23px;
    }
    path {
      color: var(--orangeWolf);
    }
  }
  .div3 {
    height: 100%;
    width: 18vw;
    background-color: #ececec;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > .preco {
      font-size: 24px !important;
      font-weight: bold;
    }
    > .p {
      font-size: 11px !important;
      > strong {
        color: var(--black) !important;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 97vw;
    .div3 {
      width: 30vw;
      > .preco {
        font-size: 12px !important;
      }
    }
    .titleAndStars p{
      font-size:11px;
    }
    img{
      width:30vw;
    }
  }
  @media (max-width: 670px) {
    .card-section svg{
      display:none;
      
    }
    height:34vh;
    .div3{
      height:100%;
      width:45vw;
    }
    button{
      width:110px;
    }
  }

  @media (max-width: 600px) {
    margin: 0 0 4% auto;
    height: 25vh;
    .titleAndStars, .stars{
      display:none;
    }
    img{
      width: 30%;
    }
    .div3{
      width:70%;
      background-color: white;
      height:100%;
    }
  }
`;
