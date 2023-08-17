import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { robots } from "./robot";
import SearchBox from "./SearchBox";
import './App.css';

const App = () => {

    const [robotList, setRobotList] = useState([]);

    useEffect(() => {

        setRobotList(robots);
    }, []);

    const handleFilterRobot = (name) => {

        let fileteredRobot = robots.filter((item) => item.name.includes(name));
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