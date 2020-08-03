import React from 'react';

// import Routes from './routes';
import GlobalStyles from "./styles/GlobalStyle";
import Header from "./Components/Header/index";
import SearchBar from "./Components/SearchBar/index";
import Store from "./Components/Store/index";
import Footer from "./Components/Footer/index";


function App() {
  return (
    <>
      <Header/>
      <SearchBar/>
      <Store/>
      {/* <Routes/> */}
      <Footer/>
      <GlobalStyles/>

    </>
  );
}

export default App;
