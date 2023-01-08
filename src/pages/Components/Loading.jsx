import React from "react";
import styles from "./styles/loadingstyle.module.css"


const Loading = () => {
    return (
        <div class={styles.body}>
            <svg viewBox="0 0 50 50" class={styles.svg}>
                <circle class={styles.circle} cx="25" cy="25" r="20" />
            </svg>
        </div>
    );
};
export default Loading;
