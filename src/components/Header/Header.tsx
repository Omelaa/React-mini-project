import { FC } from "react";

const Header: FC = () => {
    return (
        <header className={"d-flex justify-between align-center"}>
            <div className={"d-flex align-center"}>
                <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                <div className={""}>
                    <h3>Grand Vinyl</h3>
                    <p>Магазин найкращих пластинок</p>
                </div>
            </div>
            <ul className={"d-flex align-center"}>
                <li>
                    <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="user"/>
                </li>
                <li>
                    <img width={18} height={18} src="/img/heart.svg" alt="heart"/>
                </li>
            </ul>
        </header>
    );
};

export {Header};