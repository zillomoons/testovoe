import s from "./Menu.module.css";

export const Menu = () => {
    return (
        <div className={s.menu}>

            <div className={s.menuColumn}>
                <div className={s.menuIcon}>LG</div>
                <div className={s.menuIcon}>M</div>
                <div className={s.menuIcon}>C</div>
                <div className={s.menuIcon}>E</div>
                <div className={s.menuIcon}>A</div>
            </div>
            <div className={s.menuColumn}>
                <div className={s.menuItem}>Company</div>
                <div className={s.menuItem}>Главное</div>
                <div className={s.menuItem}>Клиенты</div>
                <div className={s.menuItem}>Сотрудники</div>
                <div className={s.menuItem}>Аналитика</div>
            </div>
        </div>
    )
}