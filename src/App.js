import React from 'react';
import styled from '@emotion/styled';
import { alignCenter } from './styles/utilityStyles';
import { ReactComponent as StateIcon } from './images/nystate.svg';

const AppContainer = styled.div`
  ${alignCenter}
  min-height: 100vh;
  width: 100vw;
`;
const AppHeader = styled.div`
  ${alignCenter}
  flex-direction: column;
  font-size: calc(10px + 2vmin);
`;

const StateOutline = styled(StateIcon)`
  height: 400px;
  width: 400px;
  opacity: 0.5;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
      <StateOutline />
          Let&apos;s Vote New York!
      </AppHeader>
    </AppContainer>
  );
}

export default App;
