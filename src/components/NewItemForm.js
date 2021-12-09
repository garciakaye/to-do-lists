import React, { useState } from "react";

function NewItemForm( {listId, onAddItemToList}) {
    const [itemFormData, setItemFormData] = useState({
        name: ""
    })

    const initialFormValues = {
        name: ""
    }

    function handleChange(event) {
        setItemFormData({
            ...itemFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const addedItem = {
            name: itemFormData.name,
            list_id: listId
        };
        fetch("http://localhost:9292/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addedItem),
        })
            .then((r) => r.json())
            .then((newlyAddedItem) => {
                onAddItemToList(listId, newlyAddedItem)
                setItemFormData(initialFormValues)
            })
            
    }

    

    return (
        <div className="new-item-container">
            <form className="add-new-item-form" onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={itemFormData.name}
                className="new-item-input-text"
                onChange={handleChange}
                />
                <br/>
                <button className="add-new-item-btn" type="submit">Add</button>
            </form>
        </div>
    )

}

export default NewItemForm;