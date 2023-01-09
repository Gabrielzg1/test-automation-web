import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./homestyle.module.css"

const MainPage = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.body_mainpage}>

            <div className={styles.background1_mainpage}>

                <h1 id={styles.big_title_mainpage}>
                    Nome Da Ferramenta.
                </h1>
            </div>

            <div className={styles.background2_mainpage}>
                <div id={styles.boxentrada_mainpage}>

                    <div className={styles.field_mainpage}>

                        <h1 id={styles.entrada_mainpage}>Logar como</h1>
                    </div>

                    <div className={styles.field_mainpage}>
                        <button id={styles.buttom1_mainpage} onClick={() => navigate("/user/login")}>Usuário
                        </button>
                    </div>

                    <div className={styles.field_mainpage}>
                        <button id={styles.buttom2_mainpage} onClick={() => navigate('/admin/login')}>Admin
                        </button>
                    </div>


                </div>



            </div>


        </div >


    )
}

export default MainPage



