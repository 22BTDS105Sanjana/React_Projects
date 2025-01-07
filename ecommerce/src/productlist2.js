import React, {useContext} from "react";
import { myContext } from "./App11";
export const productlist2 = () =>
{
    const rs = useContext(myContext)
    return(
        <div>
            <h4> Hi i am some random cpmponent and the result is {rs}</h4>
        </div>
    )
}