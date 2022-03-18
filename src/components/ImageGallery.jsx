import Card from "./cards/Card";
import { data } from "../helper/data";

function ImageGallery() {
    return (
        <>
            <h1 className="title">POPULAR TOUR PLACES</h1>
            <div className="image-cards">
                {data.map((place) => (
                    <Card
                        key={place.id}
                        title={place.title}
                        image={place.image}
                        desc={place.desc}
                    />
                ))}
            </div>
        </>
    );
}

export default ImageGallery;
