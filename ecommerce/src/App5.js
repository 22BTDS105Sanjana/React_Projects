import React from 'react'

export const App = () => {
    const fruits = ['Apple','Banana','Cherry','Date'];
    const students=[
        {
            sid: 1 ,
            sName:"Indira"
        },
        {
            sid: 2,
            sName:"Raj"
        },
        {
            sid:2,
            sName:"Sam"
        },
        {
            sid:4,
            sName:"Vinay"
        }
    ];
    
  return (
    <div>
        <h1>Fruit List</h1>
        <ul>
            {fruits.map((fruit,index) => (<li key={index}>{fruit}</li>))}
        </ul>
        <h1>Student List</h1>
        {students.map(({sName,sid})=>(<li key={sid}>{sName}</li>))}

    </div>
  )
}
export default App;