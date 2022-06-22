import React from 'react';
import styled from 'styled-components';
import data_ai from './../static/data-ai.svg'
import blue_check from './../static/check-blue-lt.png'

const Container = styled.div`
    width: 60%;
    margin-left: 20%;
    border-bottom: 2px solid;
    border-color: #d3cece;
    margin-bottom: 20px;
    display: flex;
    margin-top: 100px;
    @media (max-width:1300px) {
        display: block;
        border:0;
    }
`;

const TextContainer = styled.div`
    position: relative;
    width: 50%;
    margin-top: 50px;
    justify-content: center;
`;

const ImgContainer = styled.div`

`;

const TextData = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const Img_Data_Ai = styled.img`
    height: 250px;
    margin-left: 170px;
`;

const Img_Blue_Check = styled.img`
    height: 60px;
    width:  60px;
`;

const P = styled.p`
    font-size: 20px;
    margin: 0;
    margin-left: 30px;
    color: grey;
`;

const P2 = styled.p`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    
`;

const Mark = styled.mark`
    background-color: transparent;
    color: black;
`;

const Mark2 = styled.mark`
    background-color: transparent;
    color: red;
`;

function SubPage2(){
    return (
        <Container>
            <ImgContainer>
                <Img_Data_Ai src={data_ai} />
                <P2>
                    The data you need is <Mark2>inaccessible.</Mark2>
                </P2>
            </ImgContainer>

            <TextContainer>
                <TextData>
                    <Img_Blue_Check src={blue_check} />
                    <P>
                        <Mark>Privacy laws</Mark> like HIPAA and GDPR restrict 
                        sharing datasets with sensitive personal information 
                        like health records.
                    </P>
                    <br/>
                </TextData>
        
                <TextData>
                    <Img_Blue_Check src={blue_check} />
                    <P> 
                        <Mark> Data residency regulations </Mark>limit access to 
                        data that resides on servers in other jurisdictions, 
                        even within your own organization.
                    </P>
                    <br/>
                </TextData>            

                <TextData>
                    <Img_Blue_Check src={blue_check} />
                    <P> 
                        Your customers and partners are 
                        <Mark>unwilling to share data </Mark>
                        that could reveal their IP or sensitive trade secrets.
                    </P>
                    <br/>
                </TextData>
            </TextContainer>
        </Container>
    );
}

export default SubPage2;