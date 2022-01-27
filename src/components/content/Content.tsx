import s from "./Content.module.css";
import {ClientType} from "../../App";

export const Content = ({clients, active}: PropsType) => {
    //change height depending on height of filterblock
    const styleHeight = active ? {height: 'calc( 100vh - 210px )'} : {height: 'calc( 100vh - 110px)'}
    const mappedClients = clients.map(({name, phone}, index) => {
        return (
            <tr key={index}>
                <td>{name}</td>
                <td>{phone}</td>
            </tr>
        )
    })
    return (
        <div className={s.scrollContainer} style={styleHeight}>
            <table>
                <tbody>
                {mappedClients}
                </tbody>
            </table>
        </div>
    )
}
type PropsType = {
    clients: ClientType[]
    active: boolean
}