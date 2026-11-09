function Intro() {
    const firstName = "John";
    const lastName = "Doe";
    
    
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md ">
            <h2>introduction</h2>
            <p>{sayHello(firstName, lastName)}</p>
        </div>
    )
}

    function sayHello(fn, ln){
        return `Hello, ${fn} ${ln}!`;
    } 

export default Intro;