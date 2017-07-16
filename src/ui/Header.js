import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  min-height: 60px;
  padding-top: 12px;
  overflow: hidden;
`;

const HeaderLeft = styled.div`
  float: left;
`;

const HeaderRight = styled.div`
  float: right;
`;

function Header(props) {
  return (
    <Wrapper>
      <Container>
        {props.children}
      </Container>
    </Wrapper>
  );
}

Header.Left = HeaderLeft;
Header.Right = HeaderRight;

export default Header;
