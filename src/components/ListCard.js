import React from "react";

function ListCard( {list} ) {
    const { id, title } = list


    return (
        <div className="list-card">
            <h2>{title}</h2>
        </div>
    )

}


export default ListCard;