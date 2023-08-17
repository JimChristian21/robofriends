import React, { useState } from "react";
import CardList from "./CardList";

import SearchBox from "./SearchBox";
import './App.css';

const App = ({ list }) => {

    const [robotList, setRobotList] = useState(list);

    const handleFilterRobot = (name) => {

        let fileteredRobot = list.filter((item) => item.name.includes(name));
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