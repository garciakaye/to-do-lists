import React, { useEffect, useState } from "react";
import Form from "./Form";
// import ToDoForm from "./ToDoForm";
// import ToDoList from "./ToDoList";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/lists")
      .then((r) => r.json())
      .then((lists) => {
        setLists(lists);
      });
  }, []);
 
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const listToDisplay = lists.map((list) => {
    return <div key= {list.id}>{list.title}</div>
  })

  
  return (
    <>
    {showForm ? <Form /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add New To-Do-List</button>
      </div>
    </>
  );
}

export default App;