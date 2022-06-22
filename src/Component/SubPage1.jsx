import React from 'react';
import styled from 'styled-components';
import home_ill from './../static/home-illustration.svg'

const Container = styled.div`
    
    width: 70%;
    margin-left: 15%;
    border-bottom: 2px solid;
    border-color: #ebe9e9;
    margin-bottom: 20px;
    display: flex;
    margin-top: 200px;
    @media (max-width:1300px) {
        display: block;
        height: 800px;
    }
`;

const TextContainer = styled.div`
    position: relative;
    width: 700px;
    @media (max-width:1300px) {
        
    }
`;


const Img = styled.img`
    width: 35%;
    height: 80%;
    margin-left: 50px;
    @media (max-width:1300px) {
        width:400px;
    }
`;

const P1 = styled.p`
    font-size: 38px;
    font-weight: 600;
`;

const P2 = styled.p`
    font-size: 20px;
`;

const Mark = styled.mark`
    background-color: transparent;
    color: red;
`;

function SubPage1(){
    return (
        <Container>
            <TextContainer>
                <P1>
                    <Mark>Data will power your next innovation.</Mark>
                    <br />
                    How will you securely access data 
                    within and beyond your organization?
                </P1>
                <P2>
                    With IntegrateFL’s privacy enhancing technology, like federated 
                    learning and differential privacy, data teams are armed with the 
                    tools they need to collaborate within and between organizations 
                    and focus on answering the world’s most important questions 
                    without risking the most important data.
                </P2>
            </TextContainer>
            <Img src={home_ill} />
        </Container>
    );
}

export default SubPage1;