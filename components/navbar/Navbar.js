import { useContext, useState, useRef } from "react"
import Link from 'next/link'
import gsap from "gsap"
import { NavbarContext } from '../context/NavbarContext'
import { NavToggler, Nav, A, IconContainer, Line, LeftArrow } from './navbar.style'
import { FaBars, FaTimes } from "react-icons/fa"
import { openMenu, closeMenu, openNav } from "../animations/animations"

const Navbar = () => {
    // state
    const [isOpen, setIsOpen] = useState(false)

    // context
    const { value, setValue } = useContext(NavbarContext)

    // navicon
    const line0Ref = useRef(null)
    const line1Ref = useRef(null)
    const line2Ref = useRef(null)
    // links
    const link1Ref = useRef(null)
    const link2Ref = useRef(null)
    const link3Ref = useRef(null)
    const link4Ref = useRef(null)

    /***************** ANIMATIONS ******************/
    // TOGGLE NAVBAR
    const toggleNavbar = () => {
        if (window.innerWidth < 767) {
            setIsOpen(!isOpen)
        } else {
            setIsOpen(isOpen)
            const tl = gsap.timeline()
            openNav(line1Ref, line2Ref, link1Ref, link2Ref, link3Ref, link4Ref)
            tl.to('.leftArrow', { x: 0, y: '4.3rem', ease: 'back.out(2.3)', duration: 0.8 }, .6)
        }
    }

    // handle modelmenu
    const handleClick = () => {
        value ? setValue(!value) : setValue(value)
        value ? openMenu : closeMenu
        // If small screen, remove navbar when link is clicked
        if (window.innerWidth < 767) {
            setIsOpen(!isOpen)
        }
    }

    // close navbar when leftArrow is clicked
    const handleClose = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline();
        tl.to(".line", { x: 0, rotate: 0, y: 0, scale: 1, opacity: 1, duration: 0.6, }, .2)
        tl.to('.link', { x: 0, duration: 0.7 }, 0)
        tl.to('.leftArrow', { x: 0, y: '0', ease: "power4.out", duration: 0.7 }, 0)
    }

    return (
        <>
            <NavToggler onClick={toggleNavbar} isOpen={isOpen}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </NavToggler>

            <IconContainer onMouseOver={toggleNavbar}>
                <Line className="line0 line" ref={line0Ref} />
                <Line className="line1 line" ref={line1Ref} />
                <Line className="line2 line" ref={line2Ref} />
            </IconContainer>

            <Nav isOpen={isOpen}>
                <Link href="/">
                    <A onClick={handleClick} className="link1 link" ref={link1Ref}>home</A>
                </Link >
                <Link href="/about">
                    <A onClick={handleClick} className="link2 link" ref={link2Ref}>about</A>
                </Link >
                <Link href="/models">
                    <A onClick={handleClick} className="link3 link" ref={link3Ref}>models</A>
                </Link >
                <Link href="/contact">
                    <A onClick={handleClick} className="link4 link" ref={link4Ref}>contact</A>
                </Link >
            </Nav>
            <LeftArrow className="leftArrow" onClick={handleClose} />
        </>
    )
}

export default Navbar