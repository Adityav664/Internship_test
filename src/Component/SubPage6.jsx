import styled from "styled-components";
import ai from "./../static/ai-100.png";
import startup from "./../static/startups.png";


const Container = styled.div`
    height: 600px;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Text = styled.p`
    height:100px;
    color: #ff5e00;
    text-align: center;
    font-size: 35px;
    font-weight: 700;
`;

const ImgDetailText = styled.p`
    width: 200px;
    text-align: center;
`;

const ImgAi = styled.img`
    margin-right: 100px;
`;

const ImgStartups = styled.img`
    
`;

const ImgItem = styled.div`

`;

function SubPage6(){
    return(
        <Container>
            <Text>
                A recognized leader
            </Text>
            <ImgContainer>
                <ImgItem>
                    <ImgAi src={ai} />
                    <ImgDetailText>
                        Selected as one of the top 100 AI companies 
                        globally by CB Insights.
                    </ImgDetailText>
                </ImgItem>
                <ImgItem>
                    <ImgStartups src={startup} />   
                    <ImgDetailText>
                        Named as a top 25 startup by LinkedIn.
                    </ImgDetailText>
                </ImgItem>
            </ImgContainer>
        </Container>
    );
}

export default SubPage6;