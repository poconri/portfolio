import React, { useContext } from "react";
import ReactDom from "react-dom";
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import About from "@components/About";
import Skills from "@components/Skills";
import { AppContextProvider } from "../context/AppContext";
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
                <Skills />
            </AppContextProvider>
        </>
    );
}

export default App;