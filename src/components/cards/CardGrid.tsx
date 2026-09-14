import type { ICardType } from "../../types/techcardtype";
import LeftCards from "./LeftCards";
import StackCard from "./StackCard";

interface CardGridProps {
    cards: ICardType[];
    stack: ICardType[];
    handleAdd: (card: ICardType) => void;
    handleRemove: (id: number) => void;
    handleRemoveAll: () => void;
}


const CardGrid = ({ cards, handleAdd, stack, handleRemove, handleRemoveAll }: CardGridProps) => {
    return (
        <div>
            {/* Now the cards part */}
            <div className="grid grid-cols-4">

                {/* 3 cols span space it takes ! */}
                <LeftCards cards = {cards} handleAdd = {handleAdd} stack = {stack} />



                {/* Right side your stack bar & it takes 1 cols span space */}
                <StackCard />
            </div>
        </div>
    );
};

export default CardGrid;