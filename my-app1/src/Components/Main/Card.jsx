import "./Card.css"

function Card({ image ,name, gender,color}){
    return <div className="card" style={{boxShadow:"0 0 10px "+color}}>
        <img src={image} />
        <h3 className="title">{name}</h3>
        <p className="gender">{gender}</p>
        <button className="buy">Follow</button>
    </div>
}

export default Card;