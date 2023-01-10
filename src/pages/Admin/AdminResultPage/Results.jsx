import React from "react";
import { useNavigate } from "react-router-dom";

const Results = ({ results, name }) => {
    const navigate = useNavigate();
    return (
        <div className="results">
            <h2>Resultados: </h2>
            {results.map((result) => (
                <li className="item"
                    key={result._id}>


                    <div className="info">
                        <label htmlFor=""></label>
                        <div className="result"><h1>{result.userName}</h1> <h3>{result.result}</h3></div>
                    </div>
                </li>
            ))}
        </div>
    );
};
export default Results;
