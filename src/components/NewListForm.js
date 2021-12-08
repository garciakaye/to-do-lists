import React, { useState } from "react";
// import ListSection from "./ListSection";

function NewListForm( {onAddList} ) {
    const [newListTitle, setNewListTitle] = useState("");
    const [formData, setFormData] = useState("")

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
              setNewListTitle(newlyAddedList)
              onAddList(newlyAddedList)
          })
          setFormData(initialFormValues)
    }

    // const renderListCard = list => (
    //     <ListCard
    //         key={list.id}
    //         list={list} 
    //     />
    // )


    return (
        <div className="container">
            <form className="add-list-form" onSubmit={handleSubmit}>
            <h3>Add A New To-Do-List!</h3>
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