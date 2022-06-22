import BgImg from './static/bg_img.png';
import styled from 'styled-components';
import Header from './Component/Header';
import SubPage1 from './Component/SubPage1';
import SubPage2 from './Component/SubPage2';
import SubPage3 from './Component/SubPage3';
import SubPage4 from './Component/SubPage4';
import SubPage5 from './Component/SubPage5';
import SubPage6 from './Component/SubPage6';
import SubPage7 from './Component/SubPage7';
import SubPage8 from './Component/SubPage8';

const Container = styled.div`
  
`;

const Img = styled.img`
  margin: 0;
  padding: 0;
  margin-top: -5px;
  height: 600px;
  width: 75%;
  margin-left: 12.5%;
  position: static;
  top: -10px;
`;
function App() {
  return (
      <Container>
        <Header />
        <Img src={BgImg} />
        <SubPage1 />
        <SubPage2 />
        <SubPage3 />
        <SubPage4 />
        <SubPage5 />
        <SubPage6 />
        <SubPage7 />
        <SubPage8 />
      </Container>
  );
}

export default App;