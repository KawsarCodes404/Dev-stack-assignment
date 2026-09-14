interface StackCardProps {
    
}


const StackCard = ({ }: StackCardProps) => {
    return (
        <div>
            <div className="col-span-1 border rounded-xl">
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
                </div>) : ()}
            </div>
        </div>
    );
};

export default StackCard;