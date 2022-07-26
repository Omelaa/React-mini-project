import {FC} from "react";

import css from "./Plate.module.scss";

import {IPlate} from "../../Interfaces";

interface IProps {
    plate: IPlate
}

const Plate: FC<IProps> = ({plate: {title, imageUrl, price}}) => {
    return (
        <li className={css.cards__item}>
            <img className={css.cards__img} src={imageUrl} alt="vinyl"/>
            <div className={css.cards__wrapper}>
                <div className={css.cards__title}>
                    {title}
                </div>
                <div className={css.cards__info}>
                    <div className={"d-flex flex-column"}>
                        <span>Вартість вінілу:</span>
                        <b>{price} грн.</b>
                    </div>
                    <button className={css.cards__button}>
                        <img src="/img/plus.svg" alt="add to cart"/>
                    </button>
                </div>
            </div>
        </li>
    );
};

export {Plate};