import React from "react";
import { Product1 } from "./Product1";
export const Home1 = ({uname}) => {
    return (
        <div>
            <h2> HI i am child and username is {uname}</h2>
            <Product1 un = {uname} />
        </div>
    )
}