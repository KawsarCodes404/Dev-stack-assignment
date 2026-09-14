import type { ICardType } from "../../types/techcardtype";

interface StackCardContentProps {
    stack: ICardType[];
    handleRemove: (id: number) => void;
}

const StackCardContent = ({ stack, handleRemove }: StackCardContentProps) => {
    return (
        <div className="flex flex-col gap-3.5 mt-[20px]">

            {stack.map((item) => (
                <div className="flex items-center rounded-lg border justify-between p-3 border-gray-200">
                    {/* Left part of the card items */}
                    <div className="flex items-center gap-3">

                        {/* The image part */}
                        <div>
                            <img
                                src={item.icon}
                                className="h-8 w-8"
                            />
                        </div>

                        {/* Name and category div */}
                        <div>
                            <h3 className="text-sm font-semibold">{item.name}</h3>

                            <p className="text-xs text-gray-500">{item.category}</p>
                        </div>

                    </div>


                    {/* Right side of the stack item */}
                    <div>
                        <button
                            onClick={() => handleRemove(item.id)} className="relative h-8 w-8">

                            <span className="absolute left-1/2 top-1/2 h-8 w-[3px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-400"></span>

                            <span className="absolute left-1/2 top-1/2 h-8 w-[3px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gray-400"></span>
                        </button>
                    </div>
                    
                </div>
            ))}

        </div>
    );
};

export default StackCardContent;