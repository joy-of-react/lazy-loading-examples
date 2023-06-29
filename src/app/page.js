'use client';
import React from 'react';

import Katex from '@/components/Katex';

function Page() {
  const [showMath, setShowMath] =
    React.useState(true);

  return (
    <>
      <button
        onClick={() => setShowMath(!showMath)}
      >
        Toggle math
      </button>
      {showMath && <Katex math="2^4 - 4" />}
    </>
  );
}

export default Page;
