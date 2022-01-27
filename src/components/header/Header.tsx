
import s from "./Header.module.css";

export const Header = ({fullName, ava}: PropsType) => {
    return (
        <div className={s.header}>
            <input type="text" placeholder="Поиск"/>
            <div className={s.userInfo}>
                <div>{fullName}</div>
                <img src={ava} alt='avatar' className={s.ava}/>
            </div>
        </div>
    )
}

type PropsType = {
    fullName: string
    ava: string
}