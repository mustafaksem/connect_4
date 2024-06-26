import React from "react";

import '../Companents/Game.css';


const GameCircle=({id, children,className, onCircleClicked})=>{
    
    return(
    <div className={`gameCircle ${className}`} onClick={(ev)=>onCircleClicked(id)}>
        {children}
    </div>
    )
}

export default GameCircle;