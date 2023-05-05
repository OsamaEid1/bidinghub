// Hooks
import { useRef } from "react";
// Styled Component 
import Styled from "styled-components";

export let Button = Styled.button`
    color: #1877f2;
    background-color: white;
    box-shadow: 0 0 5px #00000041;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    cursor: pointer;
    transform: translateY(7px);
    opacity: 0;
    &:hover {
        background-color: #1877f2;
        color: white;
    }
`;

const ScrollTopButton = () => {
    let scrollTopBtn = useRef();

    window.onscroll = () => {
        if (window.scrollY >= 10) {
            // Show The Button
            scrollTopBtn.current.style.cssText = "transform: translateY(0); opacity: 1;"
        } else {
            // Hide The Button 
            scrollTopBtn.current.style.removeProperty("transform");
            scrollTopBtn.current.style.removeProperty("opacity");
        }
    }

   //Scroll To Top 
    let toTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    
    return (
        <Button ref={scrollTopBtn} onClick={toTop}>
            <i className="fa fa-chevron-up" style={{transition: "0s"}}></i>
        </Button>
    );
}

export default ScrollTopButton;