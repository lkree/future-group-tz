import React from "react";
import ReactDOM from 'react-dom';
import WelcomeScreen from "./components/WelcomeScreen";
import 'bootstrap/dist/css/bootstrap.css';


const App = () => (
  <WelcomeScreen/>
);

ReactDOM.render(<App/>, document.querySelector('#root'));