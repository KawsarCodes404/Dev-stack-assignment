import type { ICardType } from "../../types/techcardtype";
import StackCardContent from "./StackCardContent";

interface StackCardProps {
    handleRemove: (id : string) => void;
    handleRemoveAll: () => void;
    stack: ICardType[];
}


const StackCard = ({ handleRemove, handleRemoveAll, stack }: StackCardProps) => {
    return (
        <div className="col-span-1 p-5 self-start h-fit rounded-xl border border-gray-100">

            <h2 className="text-xl font-bold">
                Your Stack
            </h2>

            {/* count selected items */}
            <p className="mt-2 text-sm text-[#94A3B8]">
                {
                    stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`
                }
            </p>


            {stack.length === 0 ? (<div className="border border-dashed p-5 text-center mt-5 rounded-lg">
                <p className="text-[#94A3B8] text-sm">
                    Your stack is empty.
                </p>
            </div>) : (<StackCardContent stack={stack} handleRemove={handleRemove} />)}

            {/* Remove All Button of stack card */}
            <button
                onClick={handleRemoveAll}
                className="mt-6 w-full rounded-lg border border-red-400 py-3 text-lg font-semibold text-red-500"
            >
                Remove All
            </button>
        </div>
    );
};

export default StackCard;