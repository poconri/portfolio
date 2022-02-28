import React from "react";
import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Header from "@components/Header";
import HeaderRes from "@components/HeaderRes";
import { useSpring, animated, config } from '@react-spring/web';
import '@styles/Global.css';
import SideBarL from "@components/SideBarL";


const App = () => {
    const [WSize, setWSize] = useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
            setWSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
    return _ => {
        window.removeEventListener('resize', handleResize)

}
})
    return (
        <>
            { (WSize > 768) ? <Header /> : <HeaderRes /> }
            <SideBarL />
        </>
    );
}

export default App;