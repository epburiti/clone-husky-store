import styled from 'styled-components';

import top_banner from "../../Assets/top_banner.jpg";


export const Container = styled.div`
  background-image:url(${top_banner});
  background-position: center;
  background-size:100% 100%;
  height: 65vh;
`;
export const NavBar = styled.div`
  >ul{
    display: grid;
    grid-template-areas: "logo logo about myaccount fav itens";
    line-height: 21px;
    letter-spacing: 0.05em;
    height: 100%;
    padding: 0px;
  }
  >ul li a figure img{
    width:80%;
    margin: 0 0 0 30px;
  }
   >ul li a,ul li path{
    color:white;
    text-decoration: none;
  }
  >ul li {
    display:flex;
    align-items:center;
    margin-top:13px;
    & a:hover{
      opacity:0.5;
    }
  }
  .iconStyle{
    color:white;
  }
  .logo{
    grid-area: logo;
  }
`;
