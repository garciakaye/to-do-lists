import React from "react";


function ListCard( {list, onDeleteList} ) {
    const { id, title } = list


    function handleDeleteClick(){
        fetch(`http://localhost:9292/lists/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteList(list));
      }

    return (
        <div className="list-card">
            <h2>{title}</h2>
            <button className="del-btn" onClick={handleDeleteClick}>Delete List</button>
        </div>
        
    )

}


export default ListCard;