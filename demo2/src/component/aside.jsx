import List from "./listAside";
import Form from "./regForm";
import React from "react";

import Content from "./content";


class Side extends React.Component{
    render(){
        return<>
        <div className="col-3">
            <div>
            <Form/>
            <List/>
            </div>  
        </div>
    </>
    }
}
export default Side;