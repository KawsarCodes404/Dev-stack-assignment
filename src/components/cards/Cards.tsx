import { use } from "react";
import type { ICardType } from "../../types/techcardtype";

interface CardsProps {
    cardsPromise : Promise<ICardType[]>;
}

const Cards = ({cardsPromise} : CardsProps) => {

    const cards = use(cardsPromise);

    return (
        <div>
            
        </div>
    );
};

export default Cards;