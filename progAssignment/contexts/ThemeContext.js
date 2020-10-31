import React, {useState, createContext} from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [filesToParse, setFTP] = useState([{name: "dummy text", id: 1}])
    
    return (
        <ThemeContext.Provider value={{filesToParse}}>
            {props.children}
        </ThemeContext.Provider>
    )
    
}

export default ThemeContextProvider;