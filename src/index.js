import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./components/store/reducers/rootReducer";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
