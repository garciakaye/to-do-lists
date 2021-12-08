import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import NewItemForm from "./NewItemForm";

function ListSection( {list, onDeleteList} ) {
    const [showForm, setShowForm] = useState(false);

    const { id, title, items} = list


    const newToDo = items.map((item) => (
        <ul>{item.name}</ul>
    ))

    function handleNewItemClick() {
        setShowForm((showForm) => !showForm);
    }

   function handleAddNewToDo(){

   }


  

    function handleDeleteClick(){
        fetch(`http://localhost:9292/lists/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteList(list));
      }

return (
    <>
    <Row key={list.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <Col>
            <Card border="dark" className="card">
                <Card.Header className="card-header">{title}
                {/* <Button list-id={list.id} className="btn-group-sm" variant="none" onClick={handleDeleteClick}>Delete List</Button> */}
                </Card.Header>
                <Card.Body> 
                    {newToDo}
                </Card.Body>
                <Button list-id={list.id} className="btn-group-lg" variant="none" onClick={handleDeleteClick}>Delete List</Button>
            </Card>
        </Col>
    </Row>
    {showForm ? <NewToDoForm /> : null}
    </>

        // <div className="list-card">
        //     <h2>{title}</h2>
        //     <button className="del-btn" onClick={handleDeleteClick}>Delete List</button>
        // </div>
        
)

}


export default ListSection;