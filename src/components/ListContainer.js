import React from "react";
import ListSection from "./ListSection";
import { Container } from "react-bootstrap";

function ListContainer( {lists, onDeleteList, onAddItemToList} ){
    const listCards = lists.map((list) => (
        <ListSection
            key={list.id}
            list={list}
            onDeleteList={onDeleteList}
            onAddItemToList={onAddItemToList}
         />
    ))

    return (
        <div id="list-collection">
            <Container fluid>
            {listCards}
            </Container>
        </div>
    )
}


export default ListContainer;