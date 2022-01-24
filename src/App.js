import logo from "./logo.svg";
import "./App.css";
import MyList from "./components/list.js";
import React, { useState } from "react";
import MyContext from "./components/context.js";

const myFruits = ["Apple", "Grape", "Pear", "Orange"];

function App() {
    const [myFruits, setMyFruits] = useState(["test"]);
    return (
        <MyContext.Provider value={{ myFruits, setMyFruits }}>
            <div className="App">
                <header className="App-header">
                    <h1>App header</h1>
                    <MyList items={myFruits}></MyList>
                </header>
            </div>
        </MyContext.Provider>
    );
}

export default App;
