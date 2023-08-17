import React from "react";

const SearchBox = ({ filterRobot }) => {

    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search robots"
                onChange={(e) => filterRobot(e.target.value)}
            />
        </div>
       
    );
}

export default SearchBox;