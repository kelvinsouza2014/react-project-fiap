import styled from "styled-components";

export const Header = styled.header`
width: 100%;
height: 10vh;
background-color: #ed195c;
display: flex;
justify-content: space-between;
align-items: center;
color: #fff;


img {
    height: 45px;
    margin-left: 20px;
}

ul {
    display: flex;
    gap: 30px;
    margin-right: 40px;
}

li {
    list-style: none;
    
}

a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
}

a:hover{
    color: #011294;
    transition: .5s;
}
`