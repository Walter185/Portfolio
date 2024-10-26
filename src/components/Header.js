import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 20px;
  background: #282c34;
  color: white;
  text-align: center;
`;

const Header = () => (
  <HeaderWrapper>
    <h1>Walter Liendo</h1>
    <p>Desarrollador Web Full Stack</p>
  </HeaderWrapper>
);

export default Header;
