import React from "react";

const FruitsContext = React.createContext({
    myFruits: [],
    setMyFruits: (fruits) => {}
});

const GreenContext = React.createContext({
    green: [],
    setGreen: (green) => {}
})

export { FruitsContext, GreenContext };
