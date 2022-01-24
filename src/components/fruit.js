import React, { useContext, useState } from "react";
import { GreenContext } from "./context.js";

function Fruit(param) {
    const [isGreen, setIsGreen] = useState(false);

    const { green, setGreen } = useContext(GreenContext);

    return (
        <span>
            <div
                style={{
                    color: green.includes(param.fruitIndex) ? "green" : "gray",
                }}
            >
                <b>My fruit:</b> {param.fruit}
            </div>
            <button
                onClick={() => {
                    // setIsGreen(!isGreen);
                    setGreen([param.fruitIndex])
                }}
            >
                Toggle green
            </button>
        </span>
    );
}

export default Fruit;
