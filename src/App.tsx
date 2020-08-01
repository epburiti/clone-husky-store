import React from 'react';

// import Routes from './routes';
import GlobalStyles from "./styles/GlobalStyle";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";
import SearchBar from "./Components/SearchBar/index";


function App() {
  return (
    <>
      <Header/>
      <SearchBar/>
      {/* <Routes/> */}
      <Footer/>
      <GlobalStyles/>

    </>
  );
}

export default App;
