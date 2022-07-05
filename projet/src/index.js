import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import RoutesPath from "./routes/RoutesPath";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RoutesPath />
    </React.StrictMode>
);

reportWebVitals();
