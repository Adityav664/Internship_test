import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import webIcon from './../static/webIcon.svg';

const Container = styled.div`
    height: 330px;
    background-color: #050727;
`;

const BlueContainer = styled.div`
    border-radius: 200px;
    position: relative;
    background-color: #151956;
    height: 300px;
    top:-100px;
    left: -500px;
    display: flex;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
    top: -30px;
`;

const FooterText = styled.p`
    color: grey;
    margin: 0;
    padding-right: 50px;
    cursor: pointer;
    :hover{
        color: red;
    }
`;

const EmptyContainer = styled.div`
    display: flex;
`;

const IconContainer = styled.div`
    display: flex;
`;

const ListContainer = styled.div`
    margin-left: 500px;
    margin-top: 50px;
`;

const TwitterIcon = styled(BsTwitter)`
    margin-left: 30px;
    margin-top: 10px;
    height: 40px;
    width: 25px;
    color: white;
    cursor: pointer;
`;

const LinkdinIcon = styled(BsLinkedin)`
    margin-left: 800px;
    margin-top: 10px;
    height: 40px;
    width: 25px;
    color: white;
    cursor: pointer;
`;

const Img = styled.img`
    margin-left: 800px;
    margin-top: 80px;
    height: 60px;
    cursor: pointer;
`;

const SimpleContainer = styled.div`

`;

const ListText = styled.p`
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    :hover{
        color: red;
    }
`;

function SubPage8(){
    return(
        <Container>
            <BlueContainer>
                <SimpleContainer>
                    <Img src={webIcon} />
                    <IconContainer>
                        <LinkdinIcon />
                        <TwitterIcon />
                    </IconContainer>
                </SimpleContainer>             
                <ListContainer>
                    <ListText>
                        Product
                    </ListText>
                    <ListText>
                        Resources
                    </ListText>
                    <ListText>
                        Blog
                    </ListText>
                    <ListText>
                        Company
                    </ListText>
                </ListContainer>
            </BlueContainer>
            <TextContainer>
                <FooterText>
                    © Copyright integrate.ai Inc. 2022. All rights reserved.
                </FooterText>
                <EmptyContainer>
                    <FooterText>
                        Privacy Policy
                    </FooterText>
                    <FooterText>
                        Website Terms of Use
                    </FooterText>
                </EmptyContainer>
            </TextContainer>
        </Container>
    );
}

export default SubPage8;