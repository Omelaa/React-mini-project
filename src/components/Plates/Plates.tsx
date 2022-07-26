import {FC, useEffect} from "react";

import css from "./Plates.module.scss";

import {plateActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Plate} from "../Plate/Plate";


const Plates: FC = () => {
    const {plates} = useAppSelector(state => state.plates);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(plateActions.getAll())
    }, [dispatch]);

    return (
        <ul className={css.cards}>
            {plates.map(plate => <Plate key={plate.id} plate={plate}/>)}
        </ul>
    );
};

export {Plates};