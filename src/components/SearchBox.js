import React from "react";

const SearchBox = ({ handleFilterRobot }) => {

    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search robots"
                onChange={(e) => handleFilterRobot(e.target.value)}
            />
        </div>
       
    );
}

export default SearchBox;