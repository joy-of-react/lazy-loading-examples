// export * from './Katex';
// export { default } from './Katex';

import dynamic from 'next/dynamic';

const LazyKatex = dynamic(() =>
  import('./Katex')
);

export default LazyKatex;
