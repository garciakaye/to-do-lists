import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import NewToDoForm from "./NewToDoForm";

function ListSection( {list, onDeleteList} ) {
    const [showForm, setShowForm] = useState(false);

    const { id, title, items} = list

    function handleNewItemClick() {
        setShowForm((showForm) => !showForm);
    }

    console.log(items)


  

    function handleDeleteClick(){
        fetch(`http://localhost:9292/lists/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteList(list));
      }

return (
    <Row key={list.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <Col>
            <Card border="dark" className="card">
                <Card.Header className="card-header">{list.title}
                {/* <Button list-id={list.id} className="btn-group-sm" variant="none" onClick={handleDeleteClick}>Delete List</Button> */}
                </Card.Header>
                <Card.Body> 
                
                </Card.Body>
                <Button list-id={list.id} className="btn-group-lg" variant="none" onClick={handleDeleteClick}>Delete List</Button>
            </Card>
        </Col>
    </Row>


        // <div className="list-card">
        //     <h2>{title}</h2>
        //     <button className="del-btn" onClick={handleDeleteClick}>Delete List</button>
        // </div>
        
)

}


export default ListSection;