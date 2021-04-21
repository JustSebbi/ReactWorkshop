import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

const LinkButton = styled(Link)<LinkProps>`
        background-color: pink;
        color: white;
        border-radius: 0.5em;
        padding: 0.2em;
        &:hover{
            background-color: red;
        }
        `;

export default LinkButton;


