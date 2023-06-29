import React from 'react';
import { BlockMath } from 'react-katex';

function Katex({ math }) {
  return <BlockMath math={math} />;
}

export default Katex;
