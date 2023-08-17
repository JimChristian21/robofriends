import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { robots } from "./robot";
import SearchBox from "./SearchBox";

const App = () => {

    const [robotList, setRobotList] = useState([]);

    useEffect(() => {

        setRobotList(robots);
    }, []);

    const filterRobot = (name) => {

        let fileteredRobot = robots.filter((item) => item.name.includes(name));
        setRobotList(fileteredRobot);
    }

    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox filterRobot={filterRobot}/>
            <CardList list={robotList}/>
        </div>
        
    );
}

export default App;