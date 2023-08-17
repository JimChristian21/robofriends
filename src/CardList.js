import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {

    let robotList = list.map((item) => {
        return <Card key={item.id} id={item.id} name={item.name} username={item.username} email={item.email}/>
    });

    return robotList;
}

export default CardList;