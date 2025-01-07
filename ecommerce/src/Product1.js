import React from "react";
import { Productlist1 } from "./Productlist1";
export const Product1 = ({un}) => {
    return(
        <div>
            <h3> Hi i am grand child and the username is {un} </h3>
            <Productlist1 ue = {un} />
            
        </div>
    )
}