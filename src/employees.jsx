import React from "react";
import ReactDOM from "react-dom";
import EmployeeList from "./EmployeeList.jsx";
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("content"));

ReactDOM.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>,
    document.getElementById("content")
);
