import {FC} from "react";
import 'macro-css';

import css from './app.module.scss';

import {Drawer, Header, Plates} from './components';

const App: FC = () => {
    return (
        <div className={css.container}>
            <Drawer/>
            <Header/>
            <div className={css.content}>
                <div className={"d-flex justify-between align-center mb-35"}>
                    <h1>Всі пластинки</h1>
                    <div className={css.form}>
                        <label>
                            <input type="text" placeholder={"Поиск..."}/>
                            <img src="/img/search.svg" alt="Search"/>
                        </label>
                    </div>
                </div>
                <Plates/>
            </div>
        </div>
    );
};

export default App;
