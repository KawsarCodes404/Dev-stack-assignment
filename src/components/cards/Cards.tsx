import { use } from "react";
import type { ICardType } from "../../types/techcardtype";

interface CardsProps {
  cardsPromise: Promise<ICardType[]>;
}

const Cards = ({ cardsPromise }: CardsProps) => {
  const cards = use(cardsPromise);

  return (
    <div>
      <section className="container mx-auto">
        {/* Upper text */}
        <h1 className="text-3xl font-bold text-[#111827]">
          Explore the {' '}
          <span className="text-[#DB3FAE]">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-sm text-[#64748B]">
          Pick one technology per category to build your ideal stack.        </p>



        {/* Now the cards part */}
        <div className="grid grid-cols-4">
          {/* left side cards */}

        </div>
      </section>
    </div>
  );
};

export default Cards;