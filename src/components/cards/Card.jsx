function Card({ title, desc, image }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <img className="card-img" src={image} alt="nice place" />
            <div className="overlay">
                <p className="card-img-desc">{desc}</p>
            </div>
        </div>
    );
}

export default Card;
