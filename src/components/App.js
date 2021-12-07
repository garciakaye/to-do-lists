import React, { useEffect, useState } from "react";
import Form from "./Form";
import ListContainer from "./ListContainer";
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

  function handleAddList(newList) {
    setLists([...lists, newList])
  }

  const listToDisplay = lists.map((list) => {
    return <div key= {list.id}>{list.title}</div>
  })

  
  return (
    <>
    {/* <Header /> */}
    {showForm ? <Form onAddList={handleAddList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add List</button>
      </div>
      <ListContainer />
    </>
  );
}

export default App;