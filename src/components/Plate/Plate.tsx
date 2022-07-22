import { FC } from "react";
import css from "../../app.module.scss";

const Plate: FC  = () => {
    return (
        <li className={css.cards__item}>
            <img width={130} height={110} src="/img/sneakers/1.jpg" alt="sneaker"/>
            <h5>
                Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className={"d-flex justify-between align-center"}>
                <div className={"d-flex flex-column"}>
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className={css.cards__button}>
                    <img src="/img/plus.svg" alt="add to cart"/>
                </button>
            </div>
        </li>
    );
};

export {Plate};