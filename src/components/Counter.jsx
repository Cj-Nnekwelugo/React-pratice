function Counter() {
    let count = 0;
    function increaseCount() {
        count++;
        console.log(count);
    }

    return (
        <div className="max-w-md mx-auto p-10 bg-white rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold mb-4">Counter</h2>
            <span className="font-extrabold">{count}</span>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
                onClick={increaseCount}
            >
                Increase Count
            </button>
        </div>
    )
}

export default Counter;