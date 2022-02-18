import styled from 'styled-components';
import { BsArrowLeft } from "react-icons/bs";

export const NavToggler = styled.div`
    position: absolute;
    top: 3rem;
    left: 2rem;
    display: block;
    color: ${({ isOpen }) => (isOpen ? "#f1f1f1" : "#fff")};
    font-size: 2rem;
    transition: .4s ease-out;
    z-index: 2000;
    &:hover{
        cursor: pointer;
        color: ${({ isOpen }) => (isOpen ? "#555" : "#ececec")};
    }
    @media (min-width: 767px){
        display: none;
    }
`;

export const Nav = styled.nav`    
    position: fixed; 
    top: ${({ isOpen }) => (isOpen ? '0' : '-100vh')};
    left: 0;
    padding: 7vh 0 10vh;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    background: #000;
    transition: .8s;
    z-index: 100;    
    @media (min-width: 700px){
        overflow: hidden;
        padding-top: 0;
        top: 1.7rem;
        left: 4rem;    
        height: 3rem;
        width: 45rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: transparent;
    }
`;

export const A = styled.a`
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 2.2rem;
    padding: 3.6rem .2rem .4rem;
    color: #fff;
    border-bottom: .2rem solid transparent;
    &:hover{
            color: #999;
            cursor: pointer;
            border-bottom: .2rem solid #999;
        }
    @media (min-width: 760px){
        position: absolute;
        top: .5rem;
        left: -12rem; 
        padding: .2rem .1rem;
        font-size: 1.2rem;
        letter-spacing: .1rem;
        font-weight: 300;
        
     }      
`;

////////// Icon-Part //////////
// This holds the lines for opening the full screen navbar
export const IconContainer = styled.div`
    position: fixed;
    top: 2rem;
    left: 3rem;
    height: 2.6rem;
    width: 3rem;
    padding: .2rem .5rem;
    display: none;
    @media (min-width: 760px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 2000;
        &:hover{
            cursor: pointer;
        }
    }
`;

// These are the lines that makes up the icon
export const Line = styled.div`
    height: 2.2rem;
    width: .2rem;
    background: #fff;
`;

// Close navbar
export const LeftArrow = styled(BsArrowLeft)`
    position: absolute;
    font-size: 1.6rem;
    top: -2rem;
    left: 43rem;
    z-index: 200;
    visibility:hidden;
    @media (min-width: 700px){
        visibility:visible;
        color: #fff;
        &:hover{
            cursor: pointer;
            color: #ececec;
        }
    }
`;
