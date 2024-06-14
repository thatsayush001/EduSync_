import { cardData } from "../../../constants/content";
import Card from "./Card";
import './Card.css';

export const CardList = () => {
    return (
        <section className="cards--list">
            {cardData.map(item => (
                <Card
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    info={item.info}
                />))}
        </section>
    )
}