import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from "./CounterSlice";


export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState(2);

    return (
        <div className="flex flex-col items-center justify-center min-h-4 bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm space-y-6">

                {/* Counter */}
                <div className="flex items-center justify-between">
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                        className="bg-red-500 hover:bg-red-600 text-white text-xl px-4 py-2 rounded-lg transition"
                    >
                        -
                    </button>

                    <span className="text-3xl font-bold text-gray-800">
                        {count}
                    </span>

                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                        className="bg-green-500 hover:bg-green-600 text-white text-xl px-4 py-2 rounded-lg transition"
                    >
                        +
                    </button>
                </div>

                {/* Input & Actions */}
                <div className="flex flex-col space-y-3">
                    <input
                        type="number"
                        aria-label="Set increment amount"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter amount"
                    />

                    <button
                        onClick={() =>
                            dispatch(incrementByAmount(Number(incrementAmount) || 0))
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
                    >
                        Add Amount
                    </button>

                    <button
                        onClick={() =>
                            dispatch(incrementAsync(Number(incrementAmount) || 8))
                        }
                        className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition"
                    >
                        Add Async
                    </button>
                </div>

            </div>
        </div>
    );
}