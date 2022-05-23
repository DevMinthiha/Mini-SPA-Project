import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style-type: none;
    }
`;