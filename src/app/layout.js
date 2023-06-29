import React from 'react';
import 'katex/dist/katex.min.css';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
