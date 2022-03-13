import React from "react";
import ReactDom from "react-dom";
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import About from "@components/About";
import { AppContextProvider } from "../context/AppContext.js";
import '@styles/Global.css';
import SideBarL from "@components/SideBarL";
import GlobalCss from "../styles/global.css";


const App = () => {
    
    return (
        <>
            <AppContextProvider>
                <GlobalCss />
                <Navbar />
                <Content />
                <SideBarL />
                <About />
            </AppContextProvider>
        </>
    );
}

export default App;