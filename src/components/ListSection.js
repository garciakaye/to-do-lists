import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import NewItemForm from "./NewItemForm";
// import ItemList from "./ItemList";

function ListSection( {list, onDeleteList, onAddItemToList, onDeleteItemFromList} ) {
    const [showForm, setShowForm] = useState(false);

    const { id, title, items} = list
    

    const displayItems = items.map((item) => (
        <ul className="to-do-items" key={item.id}>
            {item.name}
            <button className="done-btn" onClick={() => onDeleteItemFromList(id, item)}>✔️</button>
        </ul>
    ))

    
    function handleNewItemClick() {
        setShowForm((showForm) => !showForm);
    }


    function handleDeleteClick(){
        fetch(`http://localhost:9292/lists/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteList(list));
    }

      

return (
    
    // <Row key={list.id} className="'row-cols-1 row-cols-md-3 g-4'">
    //     <Col>
            <Card border="dark" className="list-card">
                <Card.Header className="card-header">{title}
                    {showForm ? <NewItemForm listId={list.id} onAddItemToList={onAddItemToList}/> : null}
                     <div className="add-item">
                        <button className="add-item-btn" onClick={handleNewItemClick}>➕</button>
                        <button className="btn-group-sm" onClick={handleDeleteClick}>🗑️</button>
                    </div>
                </Card.Header>
                <Card.Body className="card-body">
                    {displayItems}
                </Card.Body>
                {/* <Button list-id={list.id} className="btn-group-sm" variant="none" onClick={handleDeleteClick}>Delete List</Button> */}
            </Card>
    //     </Col>
    // </Row>
    
)
}


export default ListSection;