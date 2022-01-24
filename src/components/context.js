import React from "react";

const MyContext = React.createContext({
    myFruits: [],
    setMyFruits: (fruits) => {}
});

export default MyContext;
