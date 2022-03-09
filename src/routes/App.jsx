import React from "react";
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Header from "@components/Header";
import { useSpring, animated, config } from '@react-spring/web';
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import '@styles/Global.css';
import SideBarL from "@components/SideBarL";
import GlobalCss from "../styles/global.css";


const App = () => {
    

    return (
        <>
            <GlobalCss />
            <Navbar />
            <Content />
            <SideBarL />
        </>
    );
}

export default App;