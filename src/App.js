import React, { useEffect, useState } from "react";
import CardList from "./CardList";

import SearchBox from "./SearchBox";
import './App.css';

const App = ({ list }) => {

    const [robotList, setRobotList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobotList(users));
    }, []);

    const handleFilterRobot = (name) => {
        setSearch(name);

        let fileteredRobot = robotList.filter((item) => item.name.includes(name));
        setRobotList(fileteredRobot);
    }

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox handleFilterRobot={handleFilterRobot}/>
            <CardList list={robotList}/>
        </div>
        
    );
}

export default App;