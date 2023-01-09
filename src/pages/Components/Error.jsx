import React from "react";
import styles from "./styles/errorstyle.module.css"


const Error = ({ status }) => {
    return (
        <div className={styles.body}>
            <h1>Error, Recarregue a pagina - error {status}</h1>
        </div>
    );
};
export default Error;
