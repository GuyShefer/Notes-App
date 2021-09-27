import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4em;
    margin: 2em 0;
`;

export const TextArea = styled.textarea`
    resize: none;
    font-size: 1em;
    margin: 1.5em;
    background: #ececec;
    border: none;
    transition: 0.5s;

    &:hover {
        background: #dddcdc;
    }
`;

export const Button = styled.button`
    color: palevioletred;
    background: #fff;
    font-size: 1.25em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        color: #fff;
        background: palevioletred;
    }
`;