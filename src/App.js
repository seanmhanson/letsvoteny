import React from 'react';
import styled from '@emotion/styled';
import palette from './styles/palette'
import { alignCenter } from './styles/utilityStyles';

const { white, gray } = palette;

const AppHeader = styled.div`
  background-color: ${gray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${white};
`;

function App() {
  return (
    <div css={alignCenter}>
      <AppHeader>
          <p>Edit <code>src/App.js</code> and save to reload</p>
      </AppHeader>
    </div>
  );
}

export default App;
