import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

/* 
const Contenido = (
  <div>
    <h1>HOLA MUNDO</h1>
    <div>hola desde react</div>
  </div>
);
*/

/*
function Componente({titulo, contenido}) {
  return (
  <div className="contenedor">
  <h1>{titulo}</h1>
  <div>{contenido}</div>
</div>
  );
}
*/

ReactDOM.render(<App />, document.getElementById("root"));

/*
ReactDOM.render(<Componente titulo="HOLA REACT" contenido="HOLA MUNDO DESDE REACT" />,
document.getElementById('root')
);
*/


// VIDEO https://www.youtube.com/watch?v=hdgUDN1sgtA&t=512s&ab_channel=YoelvisMulen%7Bcode%7D