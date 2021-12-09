import React from "react";
import ListSection from "./ListSection";
import { Container, Col, Row } from "react-bootstrap";

function ListContainer( {lists, onDeleteList, onAddItemToList, onDeleteItemFromList} ){
    const listCards = lists.map((list) => (
        <ListSection
            key={list.id}
            list={list}
            onDeleteList={onDeleteList}
            onAddItemToList={onAddItemToList}
            onDeleteItemFromList={onDeleteItemFromList}
         />
    ))

    return (
        <Container id="list-collection" >
        {listCards}     
        </Container>
    )
}


export default ListContainer;