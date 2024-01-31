import {useState, useLayoutEffect} from "react";


//basically a class
export function UseWindowSize() {

    //creates a state var called windowSize, and a function "setWindowSize" to update the state
    const [windowSize, UseWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

//function created with useEffect
useEffect(() => {
    function handleResize() {
        UseWindowSize(prevSize => ({
            width: window.innerWidth,
            height: window.innerHeight,
        }));
        console.log("Window size updated:", windowSize);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return() => window.removeEventListener("resize", handleResize);
}, []);
    return windowSize;
}

