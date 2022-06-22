import styled from "styled-components";
import box from './../static/box.png';

const Container = styled.div`
    height: 400px;
    margin-bottom: 100px;
    display: flex;
    border-radius: 200px;
    border: 2px solid;
    border-color: #151956;
    position: relative;
    top: -150px;
    right: 400px;
    ::after{
        border-color: aqua;
        top: 10px;
    }
`;

const TextContainer = styled.div`
    margin-left: 700px;
    margin-top: 100px;
    width: 450px;
`; 

const P1 = styled.p`
    font-size: 35px;
    font-weight: 700;
`;

const P2 = styled.p`
    border-radius: 100px;
    background-color: #df742d;
    font-weight: 700;
    height: 40px;
    width: 200px;
    text-align: center;
    padding-top: 15px;
    :hover{
        background-color: aqua;
    }
`;

const Img = styled.img`
    height: 250px;
    margin-top: 100px;
    margin-left: 200px;
`;

function SubPage5(){
    return(
        <Container>
            <TextContainer>
                <P1>
                    Request a demo to see how IntegrateFL enables 
                    secure data collaboration.
                </P1>
                <P2>
                    Request A Demo
                </P2>
            </TextContainer>
            <Img src={box} />
        </Container>
    );
}

export default SubPage5;