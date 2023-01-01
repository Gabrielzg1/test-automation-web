
import React from "react";
import { useNavigate } from "react-router-dom";

const Subjects = ({ subjects_ }) => {
    const navigate = useNavigate()
    return (
        <div className="subjects">
            <h2>Subjects: </h2>
        {
                subjects_.map((subject) => (
                    <button className="item"  
                            key={subject._id} 
                            onClick={() => {
                                console.log(subject._id)
                                navigate("/admin/subject", {state: { subject: subject.name }})
                            }}>
                    <div className="info">
                        <div className="subject">
                            {subject.name}
                        </div>
                       
                    </div>
                    
                </button>
                ))
            }
        </div>
    )
}
export default Subjects

