import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
    //create state with variables
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});

    //define function to swap state
    const handleSize = () => {
        setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
        });
    };
    //call this when DOM is updated or mutated
    useLayoutEffect(() => {
        handleSize()

        //create event listen and then get ride of event listener
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, [])

    return windowSize
}

export default useWindowSize;