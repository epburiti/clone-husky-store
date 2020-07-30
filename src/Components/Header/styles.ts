import styled from 'styled-components';

import top_banner from "../../Assets/top_banner.jpg";


export const Container = styled.div`
  background-image:url(${top_banner});
  background-position: center;
  background-size:155% 100%;
  height: 80vh;

  @media(max-width: 1000px){
    width: 95%;
    margin: 10px auto;
    height: 22%;
    border-radius: 4px;
    background-size: 120% 100%;
  }
`;
export const NavBar = styled.div`
  background: linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);

  >ul{
    display: grid;
    grid-template-areas: "logo logo about myaccount fav itens";
    line-height: 21px;
    letter-spacing: 0.05em;
    height: 100%;
    padding: 0px;
    margin-right: 50px;
  }
  >ul li a figure img{
    width:90%;
    margin: 0 0 0 10px;
  }
   >ul li a,ul li path{
    color:white;
    text-decoration: none;
  }
  >ul li a svg{
    margin-right:8px;

  }
  >ul li {
    display:flex;
    align-items:center;
    margin-top:28px;
    &:nth-child( n + 2 ) a:hover{
      opacity:0.5;
    }
  }
  >ul li:nth-child( n + 2 ){
    justify-content: flex-end;
  }
  >ul li a{
    display: flex;
    align-items: center;
    font-size:18px;
  }
  .iconStyle{
    color:white;
  }
  .logo{
    grid-area: logo;
  }

  @media(max-width: 1000px){
    >ul{
      display:none;
    }
  }
`;

export const NavBarResponsiva = styled.div`
 @media(max-width: 1000px){
    
      display:block;
    
  }
  display:none;
  height:10vh;
  width:100%;
  background-color:#313131;
  >div{
  background: linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);

  }
  >ul{
    display: grid;
    grid-template-columns: 0.5fr 10fr 2fr 1fr;
    line-height: 21px;
    letter-spacing: 0.05em;
    height: 100%;
    padding: 0px;
    margin-right: 50px;
    
    >li{
      font-size: 23px;
      list-style: none;
      display: flex;
      align-items: center;
     
    } 
    >li:nth-child( n + 3 ) a:hover{
      opacity:0.5;
    }

    >li a figure img{
      width:70%;
      margin: 0 0 20px 0;
    }
    >li a,li path{
      color:white;
      text-decoration: none;
      
    }
  }
  .one,
    .two,
    .three {
        background-color: var(--orangeWolf);
        height: 4px;
        width: 100%;
        margin: 4px auto;
      border-radius:2px;
        transition-duration: 0.3s;
    }
    .two{
      width: 70%;
      margin: 4px 0 0 auto;
    }
  .menu-toggle {
        width: 20px;
        height: 10px;
        margin: 0 60px 40px 60px;
        cursor:pointer;
    }
  svg{
    margin-bottom: 20px;
  }
}
`;