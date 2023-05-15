//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <div>
        <Title />
        <Content />
      </div>
    </div>
  );
}
//JSX
const Title = function (props) {
  return <h1>Mi primera aplicación</h1>;
};
const Content = () => {
  return <p>Esta es mi primera aplicación en React, está padrísimo!</p>;
};

export default App;
