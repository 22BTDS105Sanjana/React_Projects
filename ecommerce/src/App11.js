import React,{createContext,useState} from "react";
import { productlist2 } from "./productlist2";
import { home2 } from "./home2";
import { product2 } from "./product2";

export const myContext = createContext()
const App =() => {
    const result = useState("Passed")
    return(
        <div>
            <myContext.Provider value = {result}>
                <productlist2 />
                <product2 />
                <home2 />
            </myContext.Provider>
        </div>
    )
}
export default App;