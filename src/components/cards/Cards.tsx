import { use, useState } from "react";
import type { ICardType } from "../../types/techcardtype";
import CardGrid from "./CardGrid";

import { toast } from "react-toastify";

interface CardsProps {
  cardsPromise: Promise<ICardType[]>;
}

const Cards = ({ cardsPromise }: CardsProps) => {
  const cards = use(cardsPromise);

  const [stack, setStack] = useState<ICardType[]>([]);

  const handleAdd = (card: ICardType) => {

    setStack([...stack, card]);

    toast.success(`${card.name} added to your stack !`);
  }

  const handleRemove = (id: number) => {
    setStack(stack.filter((item) => item.id !== id))
  };

  const handleRemoveAll = () => {
    setStack([]);
  };



  return (
    <div>
      <section className="container mx-auto">

        {/* Upper text */}
        <div className="mb-[30px]">

          <h1 className="mb-[10px] text-4xl font-bold text-[#111827]">
            Explore the {' '}
            <span className="text-[#DB3FAE]">
              Technologies
            </span>
          </h1>

          <p className="mt-2 text-[18px] text-[#64748B]">
            Pick one technology per category to build your ideal stack.        </p>
        </div>


        <CardGrid
          cards={cards}
          stack={stack}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
          handleAdd={handleAdd}
        />
      </section>
    </div>
  );
};

export default Cards;