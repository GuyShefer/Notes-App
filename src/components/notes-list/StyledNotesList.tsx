import styled from 'styled-components';

export const UL = styled.ul`
    min-height: 40vh;
    margin: 3em;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
`;

export const LI = styled.li`
    width: calc((100% - 7em) / 5);
    min-width: 12em;
    height: 250px;
    padding: 1em;
    background: linear-gradient(#F9EFAF, #F7E98D);
    box-shadow: -2px 2px 15px 0 rgba(0, 0, 0, 0.5);
    font: 20px 'Gloria Hallelujah', cursive;
`;