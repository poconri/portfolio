import React from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {

const [statusMenu, setStatusMenu ] = React.useState(false);


    return (
        <AppContext.Provider value={{ 
            statusMenu, 
            setStatusMenu
            }}>
            {props.children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };