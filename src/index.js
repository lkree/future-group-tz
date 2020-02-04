import React from "react";
import ReactDOM from 'react-dom';
import WelcomeScreen from "./components/WelcomeScreen";


const App = () => (
  <WelcomeScreen/>
);

ReactDOM.render(<App/>, document.querySelector('#root'));