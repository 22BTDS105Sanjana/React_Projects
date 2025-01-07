import React, { useContext } from "react";
import { myContext } from "./App11";
export const product2 = () => {
    const rst = useContext(myContext)
    return (
        <div>
            <h3> Hi product2 and the result is {rst}</h3>
        </div>
    )
}