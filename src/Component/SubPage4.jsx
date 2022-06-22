import styled from 'styled-components';
import signal from './../static/signal.png';

const Container = styled.div`
    height: 600px;    
    margin-top: 100px;
    position: relative;
`;

const TextContainer = styled.div`
    width: 25%;
    margin-left: 60%;
    position: absolute;
    margin-top: 80px;
`;

const Signal_Img = styled.img`
    width: 80%;
    margin-left: 20%;
    position: absolute;
`;

const P1 = styled.p`    
    color: white;
    font-size: 35px;
    font-weight: 700;
    margin-top: 0;
`;

const P2 = styled.p`
    color: white;
    font-size: large;
`;

const P3 = styled.p`
    background-color: #ff6e43;
    height: 40px;
    width: 300px;
    color: white;
    border-radius: 100px;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    padding-top: 10px;
    :hover{
        background-color: aqua;
    }
`;

const Mark = styled.mark`
    background-color: transparent;
    color: red;
`;

function SubPage4() {
    return (
        <Container>
            <Signal_Img src={signal} />
            <TextContainer>
                <P1>
                    Get started with federated learning that 
                    is <Mark>easy to set up, use, and scale.</Mark>
                </P1>
                <P2>
                    IntegrateFL is the production-ready federated learning
                    platform for privacy-safe data exploration, analytics,
                    and model training on distributed data. Spend less
                    time building and maintaining federated learning
                    infrastructure so you can focus on your work.
                </P2>
                <P3>
                    Learn More About IntegrateFL
                </P3>
            </TextContainer>
        </Container>
    );
}

export default SubPage4;