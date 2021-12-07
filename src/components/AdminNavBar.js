import React from "react";

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New To-Do</button>
      <button onClick={() => onChangePage("List")}>View To-Dos</button>
    </nav>
  );
}

export default AdminNavBar;