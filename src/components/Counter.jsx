import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="max-w-md mx-auto p-10 bg-white rounded-lg shadow-md flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold mb-4">Counter</h2>
            <span className="font-extrabold">{count}</span>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
                onClick={increaseCount}
            >
                Increase Count
            </button>

            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded self-start"
                onClick={() => setCount(count - 1)}
            >
                Decrease Count
            </button>
        </div>
    )
}

export default Counter;