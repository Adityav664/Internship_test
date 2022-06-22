import styled from "styled-components";
import item1 from './../static/item1.jpg'
import item2 from './../static/item2.jpg'
import item3 from './../static/item3.jpg'

const Container = styled.div`
    background-color: #eaebec;
    height: 800px;
`;

const TitleText = styled.p`
    font-size: 40px;
    font-weight: 700;
    margin-left: 300px;
    padding-top: 100px;
`;

const ItemContainer = styled.div`
    display: flex;
    width: 70%;
    margin-left: 11%;
    justify-content: space-between;
`;

const Item = styled.div`
    margin-left: 100px;
`;

const ItemImg = styled.img`
    height: 200px;
    width: 350px;
`;

const ItemText = styled.p`
    font-weight: 500;
    font-size: 25px;
    width: 80%;
`;

const ItemLink = styled.p`
    color: red;
    font-weight: 500;
    font-size: 20px;
    :hover{
        cursor: pointer;
    }
`;

function SubPage7(){
    return (
        <Container>
            <TitleText>
                Featured Resources
            </TitleText>
            <ItemContainer>
                <Item>
                    <ItemImg src={item1}/>    
                    <ItemText>
                        Design a federated learning system 
                        in seven steps
                    </ItemText>
                    <ItemLink>
                        Read More
                    </ItemLink>
                </Item>                
                <Item>
                    <ItemImg src={item2}/>    
                    <ItemText>
                        The AI Dilemma: Build vs. Buy
                    </ItemText>
                    <ItemLink>
                        Read More
                    </ItemLink>
                </Item>                
                <Item>
                    <ItemImg src={item3}/>    
                    <ItemText>
                        AI Privacy and Customer Experience: Avoiding 
                        the ‘Creep’ Factor
                    </ItemText>
                    <ItemLink>
                        Read More
                    </ItemLink>
                </Item>                
            </ItemContainer>
        </Container>
    );
}

export default SubPage7;