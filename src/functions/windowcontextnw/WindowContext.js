import React, {createContext, useContext} from 'react';
import { UseWindowSize } from './getwindowsize';

//create context
const WindowSizeContext = createContext();

//Custom hook to use the context
export function WindowSize() {
    return useContext(WindowSizeContext);
}

//Provider Component
export function WindowSizeProvider({children}) {
    const windowSize = UseWindowSize();

    return (
        <WindowSizeContext.Provider value={windowSize}>
            {children}
        </WindowSizeContext.Provider>
    )
}