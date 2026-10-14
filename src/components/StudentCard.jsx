import "./StudentCard.css";

function StudentCard({name,emoji,city,funfact,skills}) {
    return (
        <div className="card">
            
            <div className="emoji">{emoji}</div>
            <h2>{name}</h2>
            <p>{city}</p>
            <p>{funfact}</p>
                <div className="skills">
                   {
                skills.map((skill)=> (
                        <span className="skill">skill</span>

                    ) )}
                </div>
        </div>
        
    )
}
export default StudentCard;