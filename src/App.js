import logo from "./logo.svg";
import "./App.css";
import MyList from "./components/list.js";
import React, { useState } from "react";
import { FruitsContext, GreenContext } from "./components/context.js";

const myFruits = ["Apple", "Grape", "Pear", "Orange"];

function App() {
    const [myFruits, setMyFruits] = useState(["test"]);
    const [green, setGreen] = useState([0, 1]);
    return (
        <GreenContext.Provider value={{ green, setGreen }}>
            <FruitsContext.Provider value={{ myFruits, setMyFruits }}>
                <div className="App">
                    <header className="App-header">
                        <h1>App header</h1>
                        <button
                            onClick={() => {
                                console.log("Set all green here");
                                setGreen(
                                    myFruits.map((_fruit, index) => index)
                                );
                            }}
                        >
                            Set all green
                        </button>
                        <div>Green indices: {green.join(", ")}</div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "500px",
                            }}
                        >
                            <MyList
                                items={myFruits}
                                style={{ flex: "1 0 61%" }}
                            ></MyList>
                            <MyList
                                items={myFruits}
                                style={{ flex: "1 0 61%" }}
                            ></MyList>
                        </div>
                    </header>
                </div>
            </FruitsContext.Provider>
        </GreenContext.Provider>
    );
}

export default App;
