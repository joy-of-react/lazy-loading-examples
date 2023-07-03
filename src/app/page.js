'use client';
import React from 'react';
import dynamic from 'next/dynamic';

import Spinner from '@/components/Spinner';

const Latex = React.lazy(() =>
  import('react-latex-next')
);

function Page() {
  const [showMath, setShowMath] =
    React.useState(false);

  return (
    <div className="reveal-wrapper">
      <button onClick={() => setShowMath(true)}>
        Reveal equation
      </button>

      <React.Suspense fallback={<Spinner />}>
        {showMath && <Latex>{'$2^4 - 4$'}</Latex>}
      </React.Suspense>
    </div>
  );
}

export default Page;
