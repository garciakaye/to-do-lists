import React from "react";
import ListCard from "./ListCard";

function ListContainer( {lists, onDeleteList} ){
    const listCards = lists.map((list) => (
        <ListCard
            key={list.id}
            list={list}
            onDeleteList={onDeleteList}
         />
    ))

    return (
        <div id="list-collection">
            {listCards}
        </div>
    )
}


export default ListContainer;