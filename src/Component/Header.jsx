import React from 'react';
import styled from 'styled-components';
import webIcon from './../static/webIcon.svg'
import { FaSearch } from "react-icons/fa";


const HeaderContainer = styled.div`
    
`;

const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    position: absolute;
    display: flex;
    justify-content: space-evenly;
`;

const SubContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const SubContainer2 = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const P = styled.p`
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const P2 = styled.p`
    width: 100px;
    color: white;
    font-weight: 500;
    border-radius: 50px;
    border: 4px solid red;
    padding: 10px;
    position: relative;
    left: 10px;
    :hover{
        border-color: aqua;
        cursor: pointer;
    }
`;

const Img = styled.img`
    :hover{
        cursor: pointer;
    }
`;

const Search_Icon = styled(FaSearch)`
    color: white;
    width: 20px;
    height: 20px;
    padding: 5%;
    border-radius: 100px;
    border: 0.2rem solid aqua;
    position: relative;
    top: 17px;
    :hover{
        border-color: red;
        cursor: pointer;
    }
`;

const Container2 = styled.div`
    width: 20%;
    position: absolute;
    margin-left: 20%;
    margin-top: 120px;
`;

const P3 = styled.p`
    font-size: 50px;
    color: white;
    font-weight: 700;
    margin-bottom: 0;
`;

const Mark = styled.mark`
    background-color: transparent;
    color: red;
`;

const P4 = styled.p`
    color: white;
`;

const P5 = styled.p`
    border-radius: 50px;
    background-color: #ce5531;
    color: white;
    width: 150px;
    height: 35px;
    text-align: center;
    padding-top: 5px;
    font-size: 20px;
    font-weight: 700;
    :hover{
        background-color: aqua  ;
    }
`;

function Header(){
    return(
        <HeaderContainer>
            <Container>
                <Img src={webIcon} />
                <SubContainer>
                    <P>Product</P>
                    <P>Resources</P>
                    <P>Blog</P>
                    <P>Company</P>
                </SubContainer>
                <SubContainer2>
                    <Search_Icon />
                    <P2>
                        Contact Us
                    </P2>
                </SubContainer2>
            </Container>
            <Container2>
                <P3><Mark>Secure</Mark> Data Collaboration</P3>
                <P4>We make privacy enhancing technology accessible and easy to use</P4>
                <P5>Get A Demo</P5>
            </Container2>
        </HeaderContainer>
    );
}
export default Header;