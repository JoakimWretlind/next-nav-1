import gsap from "gsap";

// Open modelsMenu
export const openMenu = (modelRef, bgRef) => {
    const tl = gsap.timeline()
    //  gsap.set(modelRef.current, { skewY: "20deg" })
    tl.to(modelRef.current, { duration: 1, y: "110vh", skewY: "0deg", height: "100vh" }, 0)
    tl.to(bgRef.current, { duration: .8, skewY: "-10deg", height: "100vh", marginTop: "0" }, .1)
}

// TODO
// Close modelsmenu (not yet effective)
export const closeMenu = (modelRef, bgRef) => {
    const tl = gsap.timeline()
    //  gsap.set(modelRef.current, { skewY: "20deg" })
    tl.to(modelRef.current, { duration: 1, y: "0", skewY: "0deg", height: "100vh" }, 0)
    tl.to(bgRef.current, { duration: .8, skewY: "-10deg", height: "100vh", marginTop: "0" }, .1)
}

// Open NAVBAR
export const openNav = (line1Ref, line2Ref, link1Ref, link2Ref, link3Ref, link4Ref) => {
    const tl = gsap.timeline()
    tl.to(line1Ref.current, { x: 55, y: '1rem', rotate: '90deg', scale: "0.8", ease: "ease-in-out", duration: 0.5 }, 0)
    tl.to(line1Ref.current, { opacity: 0, ease: "ease-in-out", duration: 0.3 }, .5)
    tl.to(line2Ref.current, { x: 250, y: '1rem', rotate: '90deg', scale: "0.8", opacity: 0, ease: "ease-in-out", duration: 0.8 }, 0)
    tl.to(link1Ref.current, { x: 130, ease: "back.out(2.5)", duration: 0.9 }, 0.3)
    tl.to(link2Ref.current, { x: 210, ease: "back.out(2.5)", duration: 0.9 }, 0.2)
    tl.to(link3Ref.current, { x: 296, ease: "back.out(2.5)", duration: 0.9 }, 0.1)
    tl.to(link4Ref.current, { x: 396, ease: "back.out(2.5)", duration: 0.9 }, 0)
}
