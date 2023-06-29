import Revealable from '@/components/Revealable';

export default function Page() {
  return (
    <>
      This is only on the server.
      <Revealable>
        <p>This is passed to the client!</p>
      </Revealable>
    </>
  );
}
