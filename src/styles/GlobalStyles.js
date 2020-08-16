import React from 'react';
import { Global, css } from '@emotion/core';

const bodyOverrides = css`margin: 0;`;

const defaultFont = css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const monospaceFont = css`
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

export default props => (
    <Global
        {...props}
        styles={css`
            body {
                ${bodyOverrides}
                ${defaultFont}
            }
            code {
                ${monospaceFont}
            }
        `}
    />
);
