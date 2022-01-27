import {IoMdSettings} from "react-icons/io";
import s from "./FilterBlock.module.css";

export const FilterBlock = ({active, toggleFilter}: PropsType) => {
    return (
        <div className={s.filter}>
            <div className={s.filterHeader}>
                <h3>Filter Block</h3>
                <i onClick={toggleFilter}> <IoMdSettings /> </i>
            </div>
            {active && <div className={s.filterOptions}>
                <div className={s.filterRow}>
                    <div>Дата от</div>
                    <div>Дата до</div>
                </div>
                <div className={s.filterRow}>
                    <div>Имя клиента</div>
                    <div>Телефон</div>
                </div>
            </div> }
        </div>
    )
}

type PropsType={
    active: boolean
    toggleFilter: () => void
}