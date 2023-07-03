'use client';
import React from 'react';

const Latex = React.lazy(() =>
  import('react-latex-next')
);

function LatexEditor() {
  const [expression, setExpression] =
    React.useState('$2^4 - 4$');

  return (
    <>
      <label htmlFor="expression-input">
        Enter LaTeX
      </label>
      <input
        id="expression-input"
        type="text"
        value={expression}
        onChange={(event) =>
          setExpression(event.target.value)
        }
      />

      <h2>Output:</h2>
      <React.Suspense fallback="loading">
        <Latex>{expression}</Latex>
      </React.Suspense>
    </>
  );
}

export default LatexEditor;
