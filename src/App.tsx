import React from 'react';
import './App.css';
import ava from "../src/common/assets/images/avatar.png"
import {Menu} from "./components/menu/Menu";
import {Main} from "./components/main/Main";

const user = {
    fullName: "Петров В. А.",
    ava: ava
}

const clients: ClientType[] = [
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},
    {name: 'Gregory Harris', phone: 789545275},
    {name: 'Albert Donovan', phone: 789545275},
    {name: 'Sam Smith', phone: 789545275},
    {name: 'Alex Millford', phone: 789545275},
    {name: 'Harry MacAvoy', phone: 789545275},
    {name: 'Albert Gregs', phone: 789545275},

]

function App() {
    return (
        <div className="App">
            <Menu/>
            <Main user={user} clients={clients} />
        </div>
    );
}

export default App;

export type ClientType = {
    name: string, phone: number
}
