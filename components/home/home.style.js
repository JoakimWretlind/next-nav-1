import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: burlywood;
`;

export const Header = styled.h1`
    text-transform: uppercase;
    font-family: 'anton', sans-serif;
    font-size: clamp(3rem, 24vw, 12rem);
    letter-spacing: clamp(.3rem, 2vw, 1rem);
`;