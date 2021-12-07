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
          body: JSON.stringify(toyData),
        })
          .then((r) => r.json())
          .then((newToy) => onAddToy(newToy))
    
      }
}


export default FormData;