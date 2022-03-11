import React from "react";
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import About from "@components/About";
import { Scrollbar } from "react-scrollbars-custom";
import '@styles/Global.css';
import SideBarL from "@components/SideBarL";
import GlobalCss from "../styles/global.css";


const App = () => {
    

    return (
        <>
            <Scrollbar style={ {height: 1000} } >
                <GlobalCss />
                <Navbar />
                <Content />
                <SideBarL />
                <About />
            </Scrollbar>
        </>
    );
}

export default App;