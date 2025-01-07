import React, {useContext} from "react"
import { product2 } from "./product2"
import { myContext } from "./App11"
export const Home1 = ({uname}) => {
    const r = useContext(myContext)
    return (
        <div>
            <h2> Hi i am home and  result is {r}</h2>
        </div>
    )
}