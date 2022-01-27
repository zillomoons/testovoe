import {Header} from "../header/Header";
import {FilterBlock} from "../filter-block/FilterBlock";
import {Content} from "../content/Content";
import React, {useState} from "react";
import {ClientType} from "../../App";
import "../../App.css";

export const Main = ({user, clients}: PropsType) => {
    const [active, setActive] = useState(false);
    const toggleFilter = () => {
        setActive(!active);
    }
    return (
        <div className="main-content">
            <Header fullName={user.fullName} ava={user.ava}/>
            <FilterBlock active={active} toggleFilter={toggleFilter}/>
            <Content clients={clients} active={active}/>
        </div>
    )
}
type PropsType ={
    user: {fullName: string, ava: string}
    clients: ClientType[]
}