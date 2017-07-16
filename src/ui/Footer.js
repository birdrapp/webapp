import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const Wrapper = styled.div`
  background-color: #FCFCFC;
  border-top: 1px solid #eee;
  padding-top: 24px;
  padding-bottom: 24px;
  font-size: 14px;
  color: #777;

  a:link,
  a:visited {
    color: #777;
  }

  a:hover,
  a:active,
  a:focus {
    color: #444;
  }
`;

export default function Footer(props) {
  return (
    <Wrapper>
      <Container>
        {props.children}
      </Container>
    </Wrapper>
  );
}
