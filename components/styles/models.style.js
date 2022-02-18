import styled from 'styled-components';

// A main container with overflow hidden. This is needed
// when the animations are skewed.
// Top -110vh -> When the page is skewed, the lower part 
// will be visible if it is set to -100vh
export const ModelSection = styled.section`
    overflow: hidden;
    position: absolute;
    top:-110vh;
    left: 0;
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: lightblue;
`;

export const ModelBg = styled.div`
    margin-top: -30vh;
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewY(10deg);
    background: maroon;
`;

export const ModelsHeader = styled.h1`
    text-transform: uppercase;
    color: #fff;
    font-family: 'anton', sans-serif;
    font-size: clamp(3rem, 24vw, 12rem);
    letter-spacing: clamp(.3rem, 2vw, 1rem);
`;