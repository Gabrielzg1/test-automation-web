import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./resultstyle.module.css"


const Results = ({ results }) => {
    console.log("result page ", results)
    const navigate = useNavigate();
    return (
        <div className="results">


            <table id={styles.table}>
                <caption id={styles.titulotabela}>Resultados</caption>
                <tr>
                    <th>Nome</th>
                    <th colspan="10">Inputs</th>
                    <th>Status</th>
                </tr>
                {
                    results.map((item) => {
                        let soma = 0;
                        for (let i = 0; i < item.result.length; i++) {
                            soma += item.result[i];
                        }
                        return (
                            <tr className="info">
                                <td>{item.userName}</td>

                                {item.result[0] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[0] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[1] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[1] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[2] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[2] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[3] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[3] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[4] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[4] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[5] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[5] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[6] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[6] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[7] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[7] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[8] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[8] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {item.result[8] == 1 && <td><div id={styles.circuloverde}></div></td>}
                                {item.result[8] == 0 && <td><div id={styles.circuloverm}></div></td>}

                                {soma != 10 && <td>Reprovado</td>}
                                {soma == 10 && <td>Aprovado</td>}
                            </tr>

                        )
                    })
                }

            </table>
        </div>
    );
};
export default Results;
