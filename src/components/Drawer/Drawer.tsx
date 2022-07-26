import { FC } from 'react';

import css from './Drawer.module.scss';

const Drawer: FC = () => {
    return (
        <div className={css.overlay}>
            <div className={css.drawer}>
                <div className={"d-flex justify-between align-center mb-20"}>
                    <h2>Корзина</h2>
                    <button className={css.drawer__delete}>
                        <img src="/img/delete.svg" alt="delete"/>
                    </button>
                </div>
                <ul className={css.drawer__items}>
                    <li className={css.drawer__item}>
                        <img width={70} height={70} src="/img/sneakers/2.jpg" alt="sneaker"/>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className={css.drawer__delete}>
                            <img src="/img/delete.svg" alt="delete"/>
                        </button>
                    </li>
                    <li className={css.drawer__item}>
                        <img width={70} height={70} src="/img/sneakers/11.jpg" alt="sneaker"/>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>8 499 руб.</b>
                        </div>
                        <button className={css.drawer__delete}>
                            <img src="/img/delete.svg" alt="delete"/>
                        </button>
                    </li>
                </ul>
                <ul className={css.cart}>
                    <li className={css.cart__item}>
                        <span>Итого:</span>
                        <div className={css.dashed}></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li className={css.cart__item}>
                        <span>Налог 5%: </span>
                        <div className={css.dashed}></div>
                        <b>1074 руб. </b>
                    </li>
                </ul>
                <button className={css.cart__submitbtn}>Оформить заказ</button>
            </div>
        </div>
    );
};

export {Drawer};