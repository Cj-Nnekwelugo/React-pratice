function WelcomeMessage() {
    const handleClick = () => alert("Welcome to our app! Let's get started with your transactions.");

    return (
        <div>
            <h1 className="text-5xl font-bold">Welcome to Our App</h1>
            <p className="mt-4 text-lg">This is a simple React application to display transactions.</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                Get Started
            </button>
        </div>
    );
}

export default WelcomeMessage;