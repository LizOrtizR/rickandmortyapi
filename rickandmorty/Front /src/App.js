import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import Intro from "./components/Intro/Intro"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Intro} />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Form} />
      <Route path='/detail/:detailId' component={Detail} />
    </div>
  );
}

export default App;

// COMPONENTE HOME
// CARDS
// CARD
// FORM
// NAVBAR

// REDUX
// ACTIONS
// REDUCER
// STORE

// CONECTAR REACT CON REDUX => PROVIDER
// DARLE A LA APP LA CAPACIDAD DE DEFINIR RUTAR => BROWSER ROUTER
