import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

function ListSection( {list, onDeleteList, onAddItemToList, onDeleteItemFromList} ) {
    const [showForm, setShowForm] = useState(false);

    const { id, title, items} = list


    const dislayItems = items.map((item) => (
        <ItemList 
            key={item.id}
            item={item}
            onDeleteItemFromList={onDeleteItemFromList}
        />
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
    <>
    <Row key={list.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12" fluid>
        <Col>
            <Card border="dark" className="list-card">
                <Card.Header className="card-header">{title}
                    {showForm ? <NewItemForm listId={list.id} onAddItemToList={onAddItemToList}/> : null}
                     <div className="add-item-btn">
                        <button onClick={handleNewItemClick}>➕</button>
                    </div>
                </Card.Header>
                <Card.Body> 
                    {dislayItems}
                </Card.Body>
                <Button list-id={list.id} className="btn-group-lg" variant="none" onClick={handleDeleteClick}>Delete List</Button>
            </Card>
        </Col>
    </Row>
    </> 
)
}


export default ListSection;