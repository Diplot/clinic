// import "./App";
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/Header/Header";
import Recall from "./component/Recall/Recall";
import Advantages from "./component/Advantages/Advantages";
import Clinic from "./component/Сlinics/Clinic";
import ArticalsAndComments from "./component/ArticalsAndComments/ArticalsAndComments";
import Footer from "./component/Footer/Footer";
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Recall />
    <Advantages />
    <Clinic />
    <ArticalsAndComments />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
