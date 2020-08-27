import React from "react";

function ToDoList() {
    return(
        <form>
            <input type="checkbox" id="1"/>
            <label htmlFor="1">Apples</label><br/>

            <input type="checkbox" id="2"/>
            <label htmlFor="2">Milk</label><br/>

            <input type="checkbox" id="3"/>
            <label htmlFor="3">Beef</label><br/>

            <input type="checkbox" id="4"/>
            <label htmlFor="4">Chicken</label><br/>
        </form>
    )

}

export default ToDoList;