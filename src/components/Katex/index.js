// export * from './Katex';
// export { default } from './Katex';

import dynamic from 'next/dynamic';

const LazyKatex = dynamic(
  () => import('./Katex'),
  {
    loading: 'Loading...',
  }
);

export default LazyKatex;
