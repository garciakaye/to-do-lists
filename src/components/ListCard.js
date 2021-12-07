import React from "react";
import ToDoItems from "./ToDoItems";

function ListCard( {list, onDeleteList} ) {
    const { id, title, items } = list

  

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
            <ul></ul>
        </div>
        
    )

}


export default ListCard;