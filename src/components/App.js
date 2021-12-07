import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function App() {
  const [page, setPage] = useState("List");

 

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <ToDoForm /> : <ToDoList />}
    </main>
  );
}

export default App;