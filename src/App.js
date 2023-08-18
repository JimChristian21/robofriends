import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import './App.css';

const App = ({ list }) => {

    const [robotList, setRobotList] = useState([]);
    const [allRobotList, setAllRobotList] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobotList(users)
                setAllRobotList(users);
            });
    }, []);

    const handleFilterRobot = (name) => {

        let fileteredRobot = allRobotList.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
        setRobotList(fileteredRobot);
    }

    return (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox handleFilterRobot={handleFilterRobot}/>
            <Scroll>
                <CardList list={robotList}/>
            </Scroll>
        </div>
        
    );
}

export default App;