import React, { useState } from "react";

function Fruit(param) {
    const [isGreen, setIsGreen] = useState(false);

    return (
        <span>
            <div style={{ color: isGreen ? "green" : "gray" }}>
                <b>My fruit:</b> {param.fruit}
            </div>
            <button
                onClick={() => {
                    setIsGreen(!isGreen);
                }}
            >
                Toggle green
            </button>
        </span>
    );
}

export default Fruit;
