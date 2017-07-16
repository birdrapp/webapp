import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const Background = styled.div`
  background-color: #F4F8FB;
  border-top: 1px solid #D5E6F1;
  border-bottom: 1px solid #D5E6F1;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export default function Page(props) {
  return (
    <Background>
      <Container>
        {props.children}
      </Container>
    </Background>
  );
}
