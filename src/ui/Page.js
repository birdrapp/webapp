import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const Background = styled.div`
  background-color: #F4F8FB;
  border-top: 1px solid #D5E6F1;
  padding-top: 48px;
  padding-bottom: 48px;
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
