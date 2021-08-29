//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Reloj from "./component/Reloj.jsx";

//render your react application
let counter = 0;
let aux;
setInterval(function() {
	aux = 0;
	aux = "00000" + counter.toString();
	ReactDOM.render(
		<Reloj
			digitFive={aux[aux.length - 5]}
			digitFour={aux[aux.length - 4]}
			digitThree={aux[aux.length - 3]}
			digitTwo={aux[aux.length - 2]}
			digitOne={aux[aux.length - 1]}
		/>,
		document.querySelector("#app")
	);

	counter++;
}, 1000);
