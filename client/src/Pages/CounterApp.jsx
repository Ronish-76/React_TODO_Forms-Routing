import React from "react";

export default function CounterApp() {
    const [counter, setCounter] = React.useState(0);
    return (
        <> 
        <div className="flex justify-center items-center h-screen">
            <div className="text-2xl font-bold mb-4">Counter App</div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)} style={{margin: "10px",backgroundColor: "lightgreen"}} >Increment</button>
            <button onClick={() => setCounter(counter - 1)} style={{margin: "10px",backgroundColor: "red"}} >Decrement</button>
        </div>
        </>
    );
}
