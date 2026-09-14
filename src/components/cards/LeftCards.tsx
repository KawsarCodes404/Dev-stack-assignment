import type { ICardType } from "../../types/techcardtype";

interface LeftCardsProps {
    handleAdd: (card: ICardType) => void;
    cards: ICardType[];
    stack: ICardType[];
}


const LeftCards = ({ handleAdd, cards, stack }: LeftCardsProps) => {


    return (

        <div className="col-span-3 grid grid-cols-3 gap-6">
            {
                cards.map((card) => (
                    <div className="rounded-xl border border-gray-100 p-5">

                        {/* icon & sign */}
                        <div className="flex justify-between items-center">
                            <img src={card.icon} alt="" className="h-10 w-10" />

                            <h2 className="bg-blue-50 rounded-full px-3 py-1 text-xm text-blue-400">
                                {card.badge}
                            </h2>
                        </div>

                        {/* Name part */}
                        <div className="text-[#0e141f] font-bold mt-6 text-[17px]">
                            {card.name}
                        </div>

                        {/* Description start */}
                        <p className="mt-2 text-sm text-[#64748B]">A declarative, component-based
                            JavaScript library for building modern user
                            interfaces.</p>


                        {/* Some information */}
                        <div className="mt-7 flex items-center justify-between">
                            {/* left */}
                            <span className="bg-gray-100 rounded text-sm text-gray-600 px-[10px] py-10px]">
                                {card.category}
                            </span>

                            {/* middle */}
                            <span className="text-gray-600 text-sm">
                                {card.difficulty}
                            </span>

                            {/* right */}
                            <span className="text-gray-700">
                                {card.rating}
                            </span>
                        </div>


                        {/* Bottom button part */}
                        <button
                            onClick={() => handleAdd(card)}
                            disabled={!!stack.find((item) => item.id === card.id)}
                            className="mt-6 w-full rounded-lg bg-[#080D1C] py-[10px] text-sm text-white disabled:cursor-not-allowed disabled:bg-gray-400"
                        >
                            {stack.find((item) => item.id === card.id)
                                ? "✓ Added to Stack"
                                : "Add to Stack"}
                        </button>
                    </div>
                ))
            }
        </div>

    );
};

export default LeftCards;