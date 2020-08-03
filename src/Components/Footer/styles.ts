import styled from "styled-components";

export const Container = styled.div`
  margin-top: 18%;
  span{
    color:var(--fontFooter);

  }
 >footer{
  width:100%;
  height:200px;
  background-color:var(--modalsColor);
  border-top: 0.1px solid #d3dff8;
 }
 .hyperx-footer{
   width:55%;
 }


.mainDivFooter{
  display: flex;
  border-bottom: 0.1px solid #d3dff8;
  .kabum-footer{ 
    margin: 1% 0;
    display: flex;
    flex-direction: column;
    margin-left:25px;
    

  img {
    width: 80px;
  }
}
.logos-footer{
  margin: 1% 0;
  display: flex;
  width: 30%;
  margin-left: auto;
  >hr{
    height: 64px;
    border-top-width: initial;
    border-right-width: initial;
    border-bottom-width: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-style: none none none solid;
    border-image: initial;
    border-left: 1px solid rgb(196, 196, 196);
  }
}
.pagamento-footer{
  width: 50%;
  margin: 1% 0 0 3%;
  p{
    color:var(--fontFooter);
  }
}
  .estiloCartoes{
    div{
      display: flex;
    }

    div div{
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        height: 20px;
        width: 40px;
        background: rgb(236, 236, 236);
        border-radius: 3px;
        margin:18px 1% 0 1%;
      >img{
        width: 30px;
       object-fit: contain;
      }
    }
  }
}

.regras{
 ul{
   display: flex;
   justify-content:center;
   margin:5px 0 0 5px;
   li:nth-last-child(n + 2){
    border-right: 1px solid grey;     
   }
   li{
     list-style:none;
     margin-right:10px;
     padding: 0px 10px;
     a{
       text-decoration:none;
       color: var(--orangeWolf);
       font-size:13px;
     }
   }
 }
 p{
   color:var(--fontFooter);
   text-align:center;
   font-size:13px;
 }
}

@media(max-width:1000px){
  footer {
 
    height:100%;
  }
  .mainDivFooter{
    display:block;
    .logos-footer{
      width:42%;
      margin: 1% auto 0 auto;
      img:nth-child(1){
        width:40%;
        margin-right:4%;
      }
    }
    span{
      font-size:11px;
    }
    .pagamento-footer{
      width:50%;
      font-size:11px;
      margin: 4% auto;
      .estiloCartoes{
        text-align: center;
      div div{
        margin:18px 3% 0 3%;
      }
    }
  }
}

  .regras{
    ul{
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      > li:nth-last-child(n + 2){
        border-right:0;
      }
      >li{
        margin-bottom:1%;
      }
      margin-bottom:1%;
    }
  }
}
`;
