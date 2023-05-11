import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;

        ::-webkit-scrollbar {
            width: 12px;
            -webkit-transition: all 300ms;
            transition: all 300ms;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 7px;
            background: #FCA412;
            border-left: 3px solid #FCA412;
            border-right: 3px solid #FCA412;
        }
        ::-webkit-scrollbar-track {
            background-color: #14223D;
        }

    }
    body {
        background-color: #022128;
        font-family: 'Inter';
    }
`;
