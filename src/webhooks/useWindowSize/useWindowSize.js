import { useLayoutEffect, useState } from "react";

export function useWindowSize()  {
    //create state with variables
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

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

    return ( windowSize
    );    

}

export default useWindowSize;