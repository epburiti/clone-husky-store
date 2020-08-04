import React from 'react';
import {Provider} from 'react-redux';

// import Routes from './routes';
import GlobalStyles from "./styles/GlobalStyle";
import Header from "./Components/Header/index";
import SearchBar from "./Components/SearchBar/index";
import Store from "./Components/Store/index";
import Footer from "./Components/Footer/index";

import store from "./store";



function App() {
  return (
    <Provider store={store}>
      <Header/>
      <SearchBar/>
      <Store/>
      {/* <Routes/> */}
      <Footer/>
      <GlobalStyles/>

    </Provider>
  );
}

export default App;
