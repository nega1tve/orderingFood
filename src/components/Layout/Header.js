import React from "react";
import backgroundImg from '../../assets/background.jpg'
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

function Header(props){
    return <React.Fragment>
        <header className={styles.header}>
            <h1>Уличная азия</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>

        <div className={styles['main-image']}>
            <img src={backgroundImg} alt="Блюда азиатской кухни"/>
        </div>

    </React.Fragment>
}

export default Header;