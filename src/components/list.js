import React, { useContext } from "react";
import { FruitsContext } from "./context.js";
import Fruit from "./fruit.js";

function MyList(param) {
    const { myFruits, setMyFruits } = useContext(FruitsContext);
    const addFruits = () => {
        console.log("Adding fruits");
        setMyFruits([...myFruits, `fruits ${myFruits.length}`]);
    };
    const removeFruits = () => {
        console.log("Removing fruits");
        const prevFruits = [...myFruits];
        prevFruits.splice(0, 1);
        setMyFruits(prevFruits);
    };

    const redIndices = [2, 4];

    return (
        <div>
            <h3>List</h3>
            <button onClick={addFruits}>Add fruits</button>
            <button onClick={removeFruits}>Remove fruits</button>
            <hr />
            <div>
                {myFruits &&
                    myFruits.map((item, index) => {
                        return (
                            <Fruit
                                fruit={item}
                                fruitIndex={index}
                            ></Fruit>
                        );
                    })}
            </div>
        </div>
    );
}

export default MyList;
