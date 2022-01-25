import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./stores";
import axios from "axios";

// initialize axios
axios.defaults.baseURL = "http://54.151.226.92:8080/";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Routes />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
