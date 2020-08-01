import {createGlobalStyle} from "styled-components";

export default createGlobalStyle `
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:var(--white);
  }
  html,body, #root{
    max-height:100vh;
    max-width:100vw;
    height:100%;
    width:100%;
    background:var(--white);
  }
  *,button,input{
    border:0;
    background:none;
    font-family: Roboto, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html{
    background:var(--primary);
  }
  :root {
    --white: #e5e5e5;
    --modalsColor: #fafafa;
    /* --white: #15202b; */
    --sections: #D9D9D9;
    --orangeWolf: #f7a202;
    --black: black;
    --fontFooter: #828da3;
  }
`;