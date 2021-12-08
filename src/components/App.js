import React, { useEffect, useState } from "react";
import NewListForm from "./NewListForm";
import ListContainer from "./ListContainer";
// import ToDoItems from "./ToDoItems";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  function handleAddItemToList(listId, newItem) {
    const listToUpdate = lists.find((list) => list.id === listId);
    listToUpdate.items = [...listToUpdate.items, newItem]
    const objToUpdateIndex = lists.findIndex((list) => list.id === listId)
    const newState = [...lists]
    newState[objToUpdateIndex] = listToUpdate
    setLists(newState)
  }



  function handleDeleteList(deletedList) {
    const updatedList = lists.filter((list) => list.id !== deletedList.id);
      setLists(updatedList)
  }

  
  return (
    <>
    {/* <Header /> */}
    {showForm ? <NewListForm onAddList={handleAddList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Create New List</button>
      </div>
      <ListContainer
      lists={lists}
      onDeleteList={handleDeleteList}
      onAddItemToList={handleAddItemToList}
      />
    </>
  );
}

export default App;