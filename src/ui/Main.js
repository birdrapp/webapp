import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const Background = styled.div`
  background-color: #F4F8FB;
  border-top: 1px solid #D5E6F1;
  padding-top: ${props => props.padding};
  padding-bottom: ${props => props.padding};
`;

export default function Main(props) {
  const padding = props.slim ? '24px' : '48px';

  return (
    <Background padding={padding}>
      <Container>
        {props.children}
      </Container>
    </Background>
  );
}
