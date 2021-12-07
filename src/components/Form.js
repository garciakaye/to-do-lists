import React, { useState } from "react";

function Form( {onAddList} ) {
    const [newListName, setNewListName] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        const listData = {
          title: newListName
        };
        fetch("http://localhost:9292/lists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(listData),
        })
          .then((r) => r.json())
          .then((newList) => onAddList(newList))
    }

    return (
        <div className="container">
          <form className="add-list-form" onSubmit={handleSubmit}>
            <h3>Add A New To-Do-List!</h3>
            <input
              type="text"
              name="name"
              value={newListName}
              placeholder="Enter your list name..."
              className="input-text"
              onChange={(e) => setNewListName(e.target.value)}
            />
          </form>
        </div>
      );
}


export default Form;