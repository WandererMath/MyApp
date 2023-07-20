
import { useState } from "react";

function ListGroup(){


    const items=["London",
    "Paris",
    "New York"
    
    ];

    const [selectedIndex, setSelectedIndex] = useState(-1);





    return( 
        <>
        <h2>Items</h2>
    <ul className="list-group" >
    {items.map((item,index)=><li className={selectedIndex===index?
    "list-group-item active":
    'list-group-item'} onClick={()=>{
        setSelectedIndex(index);
    }} key={item}>{item}</li>)}
  </ul>
  </>
  );
}
export default ListGroup;