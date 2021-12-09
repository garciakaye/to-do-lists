import React, { useState } from "react";
// import ListSection from "./ListSection";

function NewListForm( {onAddList} ) {
    // const [newListTitle, setNewListTitle] = useState("");
    const [formData, setFormData] = useState({
      title: ""
    })

    const initialFormValues = {
        title: ""
    }

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

    function handleSubmit(e) {
        e.preventDefault();
        const addedList = {
          title: formData.title
        };
        fetch("http://localhost:9292/lists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addedList),
        })
          .then((r) => r.json())
          .then((newlyAddedList) => {
              // setNewListTitle(newlyAddedList)
              onAddList(newlyAddedList)
              setFormData(initialFormValues)
          })
          // setFormData(initialFormValues)
    }

  

    return (
        <div className="form-container">
            <form className="add-list-form" onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="Enter your list name..."
                className="input-text"
                onChange={handleChange}
            />
            <br />
            <button className="add-list-btn" type="submit">Add List</button>
            </form>
          
        </div>
    );
}


export default NewListForm;